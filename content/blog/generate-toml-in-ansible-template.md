+++
title = "Generate TOML using Ansible Template"
date = 2021-10-17T00:00:00+02:00
tags = ['ansible', 'toml', 'devops']
+++

In this blog post, I will show how we can add `to_toml` filter to Ansible template filters. This filter can be
very helpful in situations where we want to generate config files that are in `TOML` format. `TOML` is a file format
very similar to `JSON` and `YAML`. You can read more about this format here: https://toml.io/. We will use Ansible filter plugins to implement our new filter.

# Configuration

Let's start with a simple Ansible playbook file where we define our configuration variables.

`yaml_test.yml`
```yaml
- name: Test Yaml
  hosts: localhost
  vars:
    config_data: # this is our config file variable
      x: stringtest
      a: 1
      b: 2
      t:
        - test
        - test2
      d:
        a: 1
        b: 2
  tasks:
    - template:
        src: config.toml.j2
        dest: config.toml
```

Next, create a configuration template.
Here we are using the `to_toml` filter that will render our `config_data` dict from
Ansible playbook into `TOML` representation.

`templates/config.toml.j2`
```jinja
{{ config_data | to_toml }}
```

The last step is an actual implementation of the `to_toml` filter.
We will start with the installation of the `toml` python package. You can install the `toml` package using this command.

```bash
pip install toml
```

Next, create a file named `filters.py` in `filter_plugins` dir on the same
lever where the playbook is located.


`filter_plugins/filters.py`
```python
#!/usr/bin/python

import toml
import json

class FilterModule(object):

    def filters(self):
        return {'to_toml': self.to_toml}

    def to_toml(self, variable):
        s = json.dumps(dict(variable))
        d = json.loads(s)
        return toml.dumps(d)
```

As you can see we are doing some strange thing here. We are converting into string and back to Python dict using
python JSON library. We need to do this to provide string in a good format for the YAML parser to be able to work
as expected.

```python
s = json.dumps(dict(variable))
d = json.loads(s)
```

After this operation, all strings inside `d` dict are in standard Python string format. Without is strings are in
`<class 'ansible.parsing.YAML.objects.AnsibleUnicode'>` format and this will cause `TOML` rendering to break. For example
this

```yaml
x: stringtest
```

will be rendered like this

```toml
x = [ "s", "t", "r", "i", "n", "g", "t", "e", "s", "t",]
```

and we do not want that.

# Usage

After we set up our new filter we can use it like this

```bash
ansible-playbook yaml_test.yml
```

Next check the contents of `config.toml`

```toml
x = "stringtest"
a = 1
b = 2
t = [ "test", "test2",]

[d]
a = 1
b = 2
```

As you can see we got `TOML` representation of our variable in Ansible Playbook.

# Summary

In this blog post, I presented how you can render `TOML` config files using Ansible templates filters.
Toml files are
getting very popular and a lot of DevOps software is using it for example https://www.influxdata.com/time-series-platform/telegraf/.
Now you can start using `to_toml` filter in order to generate your own `TOML` configuration files using Ansible.

