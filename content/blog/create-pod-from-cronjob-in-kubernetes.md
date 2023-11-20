---
title: "Create Pod From CronJob in Kubernetes"
date: "2023-11-20T21:35:24+01:00"
draft: false
---

Sometimes there is a need to run Kubernetes CronJob as a Pod. For example you want to check if all files are in place because you are getting strange errors in logs. If you want to check that without creating Pod manually you have two options.
- wait for CronJob to run a Pod based on schedule (not always possible if schedule is very rare)
- manually create Job from CronJob using `kubectl create job <name> --from <existing_cron_job_name>` command line
All of those solutions are fine if process running inside created Pod is running long and gives you enought time to check all the things that you want. But sometimes this is not possible for example due to bug in startup script when Pod is exiting seconds after its creation. In that case it is not possible to enter the Pod using `kubectl exec` to diagnose the issue. 
Of course you can always export CronJob as yaml and modify it manually but this is time consumming and may lead to errors. In this blog post I will describe better solution for that problem.

>Note: All code in this tutorial has been tested using Kubernetest v1.21.x and Python3.

# Python Kubernetes API
We will use Python Kubernetes API to automate creation of Pod based on CronJob. We will modify some values from Pod.Spec to allow our new Pod run infinitely so we will have enougth time to investigate all issues. What we need to do at beginning is to install Python Kubernetes API libs from pip repo using this command:
```
pip install kubernetes
```

Then let's check if everything works fine by running this simple Python script:

```python
from kubernetes import client, config
```

If there are no import error then that means our library is configured properly and we can proceed with next steps. Our script will contains followings steps:
- getting CronJob definition from cluster
- extracting PodSpec from CronJob definition
- replacing some elements in PodSpec
- creating new Pod based on our new PodSpec

In next section I will describe those in details
# Scripting

So first step is to get definition of CronJob from cluster. For that we will use `read_namespaced_cron_job` method.

```python
from kubernetes import client

name = 'my-cron-job'
namespace = 'default'
api_instance = client.BatchV1Api()
cron_job = api_instance.read_namespaced_cron_job(name, namespace)
```

We use `BatchV1Api` here because CronJob is under that. As the reminder - this is typical start of CronJob definition in Kubernetes:
```yaml
apiVersion: batch/v1
kind: CronJob
```

Next step is extraction of PodSpec object instance from our CronJob. First of all we need to extract `JobTemplateSpec` and then take `PodTemplateSpec`. Last step is to get actual spec of pod as `PodSpec` object.
```python
pod_spec = cron_job.spec.job_template.spec.template.spec
```

This is the moment, where if we want, we might apply necessary changes to our pod_spec. What I recommend is to change command to `sleep infinity` so our new Pod will not exit as soon as it is created.
```python
pod_spec.containers[0].command = ['sleep', 'infinity']
```
This code assumes that you have only one container in your pod. If there is more then simple `for loop` will be necessary.

What is left is creation of new `Pod` in cluster - lets do that right now. We reference our extracted pod_spec in pod.spec field of our new object. Last command pushes definition of our new pod to cluster using `CoreV1Api` object.
```python
pod = client.V1Pod()
pod.metadata = client.V1ObjectMeta()
pod.metadata.name = 'my-new-pod-based-on-cron-job'
pod.spec = pod_spec


api_core = client.CoreV1Api()
api_core.create_namespaced_pod(namespace, pod)
```

The whole script should look like that:
```python
from kubernetes import client, config

name = 'my-cron-job'
namespace = 'default'

config.load_kube_config() #needed to detect your kubernetes config just like kubectl

api_instance = client.BatchV1Api()
name = args.cron_job_name
namespace = config.list_kube_config_contexts()[0][0]['context']['namespace']
cron_job = api_instance.read_namespaced_cron_job(name, namespace)
pod_spec = cron_job.spec.job_template.spec.template.spec

pod = client.V1Pod()
pod.metadata = client.V1ObjectMeta()
pod.metadata.name = name + '-pod'
pod.spec = pod_spec

api_core = client.CoreV1Api()
api_core.create_namespaced_pod(namespace, pod)
```

# Summary
In this blog post I described how you can create Pod based on CronJob. The proces involves using Kubernetes Python Api to interact with cluster. At the end we got script that can be further customized to fit more advanced need including automation of tasks.
