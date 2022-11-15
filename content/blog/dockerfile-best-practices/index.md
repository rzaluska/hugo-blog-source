---
title: Dockerfile Best Practices
date: "2022-11-15T07:56:16+01:00"
draft: true
---

# Non root user
# Order of operations - frequency of change
# Cleanup after run
# Use args if you want to customize your build later
rm -rf /var/apt
# Multistage build
FROM x as build
# Maintainer volume and expose aka documentation
# Store Dockerfiles in git repository
# Create CICD Jenkins pipeline for building Dockerfiles

