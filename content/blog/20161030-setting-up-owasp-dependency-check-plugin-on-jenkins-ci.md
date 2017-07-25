title: OWASP Dependency-Check Plugin on Jenkins CI
link: http://jaffamonkey.com/12237/setting-up-owasp-dependency-check-plugin-on-jenkins-ci
author: jaffamonkey
description: 
post_id: 12237
created: 2016/10/30 16:40:33
created_gmt: 2016/10/30 16:40:33
comment_status: closed
post_name: setting-up-owasp-dependency-check-plugin-on-jenkins-ci
status: publish
post_type: post

# OWASP Dependency-Check Plugin on Jenkins CI

The [OWASP Dependency-Check Plugin](https://wiki.jenkins-ci.org/display/JENKINS/OWASP+Dependency-Check+Plugin) will locate npm, maven, php, jar packages and analysze them for known security vulnerabilities (full support list is on the website). To use, you need to create a build step on the app build job you have, after all dependencies installed, then publish the report in a post-build step. 

#### Install the plugin:

  * Manage Jenkins -> Manage Plugins -> Available
  * Search for “Custom tools”, then click “Install”

#### Job Build step:

After last build step add "Invoke OWASP Dependency-Check analysis" build step Enter path to scan (e.g. ${WORKSPACE}) 

#### Post-build step:

Add post-build action "Publish OWASP Dependency-Check analysis results", and enter a filename 

#### **Save and Build:**

On the Job dashboard, you will see a graphical chart to the right, and a link to "Dependency-Check Warnings" granular report in left-hand menu. ![screenshot-from-2016-10-30-163856](/wp-content/uploads/2016/10/Screenshot-from-2016-10-30-163856-e1477845600465-500x363.png)