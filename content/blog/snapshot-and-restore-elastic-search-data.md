+++
title = "Snapshot and Restore Elastic Search Data"
date = 2021-11-28T00:00:00+01:00
tags = ["elasticsearch", "docker"]
+++

In this blog post, I will describe how to use the snapshots functionality
of Elastic Search to create backups or migrate data to another cluster.
This tutorial is prepared and tested using Elastic Search version 7.x. If
you are using another version of Elastic Search then there is possibility
that some functionality described here will not work.

# What is Elastic Search snapshot
Snapshot is a way to save the current state of the cluster. The state of the cluster contains
data in indices and all structured needed for fast search through them (there
is an exception from this rule - more about it in next sections).
If you have a snapshot you can restore your cluster to the previous state. Snapshot
and restore operations can be done online mode. There is no need for shooting
down your cluster or any of its nodes. Snapshots are incremental so if you have
a previous snapshot and you are creating another one then the only difference will be
saved. This technique greatly reduces snapshots disc usage.

To save snapshots you need to register the repository in Elastic Search.
A repository can be treated as a container for snapshots storage. There as
several types of build in repositories available in Elastic Search:
- `fs` - file-based repository. Snapshots are stored in a specified directory in
    the filesystem. This is the most common repository type. Snapshot data can be
    backed up to another location by simply copying files. You need to be
    careful here because copying data during snapshot creating can cause
    problems during the restore process due to inconsistencies. We will be using this
    repository type in this tutorial.
- `url` - this is a read-only snapshot repository that can be used to move data
    to remove cluster without risk of two clusters using snapshot repository is
    same time
- `source` - special repository type that you can wrap on top of fs repository
    to produce smaller snapshots. Those snapshots will lack essential
    data needed for search so after restore there will be no possibility for
    searching through indices unless you will force reindex them via API call.

Other repository types are also available via plugins but we are not going
to talk about them here.

# Setup
I will assume that you are using the Elastic Search cluster provisioned using docker
containers. To use fs repository snapshots, we need to set `path.repo`
variable to the directory where we will be storing our snapshots. For multi-node
cluster this directory needs to be visible on all nodes. You can use a network
files system such as NFS to fulfill this requirement. For docker
containers setup using docker-compose you can configure this variable via
environment like so:

`docker-compose.yml`
```yaml
version: '2.0'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.15.2
    container_name: elasticsearch
    environment:
    ...
    # Add this line to environment
    - path.repo: /mount/backups
    ...
    volumes:
      # add this line to volumes - snapshots will be available
      # in /data/elasticsearch/snapshots directory on docker host
      - /data/elasticsearch/snapshots/:/mount/data
```

To apply those settings you need to recreate Elastic Search docker containers
by running:

```bash
docker-compose up -d
```
It is safe to perform a rolling restart of the cluster after you setup `path.repo`
variable.
The `path.repo` setting is needed for Elastic Search to allow folders to be
selected as snapshot repository paths via API call. Without this setting,
you can not set the given path as the fs repository as it will be rejected.

Now we are good to create our fs repository using Elastic Search API call. Run
this command in terminal:

```bash
curl -X PUT "localhost:9200/_snapshot/fs?pretty" -H 'Content-Type: application/json' -d'
{
  "type": "fs",
  "settings": {
    "location": "/mount/backups/fs",
    "compress": true
  }
}
'
```
where `fs` in URL is the repository name. If you want to compress data in your
repository set `compress: true` just like in this example. All snapshots from
this repo will be available in `/mount/backups/fs/` directory in the docker container
or `/data/elasticsearch/snapshots/fs` directory on the Docker host.

There should be no errors in a response message and that means your repository is
set up correctly. You need to run this command on only one node if you are using
the multi-node cluster.

To check if your cluster is set up properly run the following command:

```bash
curl -X PUT "localhost:9200/_cat/repositories?v
```
```sh
id        type
fs          fs
```

# Creating the first snapshot
To create the first snapshot of the cluster run the following command.

```bash
curl -X PUT "localhost:9200/_snapshot/fs/first_snapshot?wait_for_completion=true"
```
In this command `fs` is repository name and `first_snapshot` is snapshot name.
specify the `wait_for_completion=true` parameter then this command will block until
your snapshot is done. This is important if you are going to copy your snapshot
to another location after backup is done. If you are running this command
without the `wait_for_completion` option then
you can monitor snapshot progress using this command:

```bash
curl -X GET "localhost:9200/_snapshot/fs/_current?pretty"
```

After the backup is done you can display all snapshots using the following command
```bash
curl -X PUT "localhost:9200/_cat/snapshots/fs?v
```
where `fs` is the repository name.

Then you are free to copy snapshot data to another location for example to s3
bucked for long-term backup.

# Restoring data

Restoring a snapshot assuming that you know the name of the repository and the name of
snapshot (you can get this data from `/_cat/repositories/` and
`/_cat/snapshots/` API calls). You can start to restore of snapshot via this
command:
```bash
curl -X POST "localhost:9200/_snapshot/fs/first_snapshot/_restore"
```
where `fs` is repository name and `first_snapshot` is snapshot name.
Snapshot restore command does not have the `wait_for_completion` option. Snapshot
restore is handled via Elastic Recovery process and can be monitored using
this command:

```bash
curl -X PUT "localhost:9200/_cat/recovery?v
```
This command should give you an overview of restore progress from all indices
indicated by percent of completion.

You can restore data from another cluster simply by copying snapshot files from
the fs snapshot directory on one cluster to another. This is safe if there is not
currently running snapshot operation. Remember to copy all data from one cluster and
before sending it into destination one remove old snapshot data on the destination cluster.
You can't mix snapshots created on one cluster with snapshots created on another
in the same directory. After files are copied you can start the restore process simply via
`/_snapshot/{repo}/{snapshot}/_restore` API call.

# References
https://www.elastic.co/guide/en/elasticsearch/reference/current/snapshots-register-repository.html
