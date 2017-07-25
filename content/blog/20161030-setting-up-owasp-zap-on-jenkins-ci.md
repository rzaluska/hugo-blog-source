title: OWASP ZAP on Jenkins CI
link: http://jaffamonkey.com/12225/setting-up-owasp-zap-on-jenkins-ci
author: jaffamonkey
description: 
post_id: 12225
created: 2016/10/30 00:18:52
created_gmt: 2016/10/30 00:18:52
comment_status: closed
post_name: setting-up-owasp-zap-on-jenkins-ci
status: publish
post_type: post

# OWASP ZAP on Jenkins CI

[OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) is a very established and useful test tool, and there is a Jenkins plugin [ZAProxy](https://wiki.jenkins-ci.org/display/JENKINS/ZAProxy+Plugin) to enable you to easily include it in CI.  You can add it as a step to an exiting job, and create a job specifically to run ZAP.  Instead of using a lot of screenshots, I have done it as a step-by-step text-only guide.  Firstly, get the plugin "Custom tools" 

  * Manage Jenkins -> Manage Plugins -> Available
  * Search for "Custom tools", then click "Install"
  * Search for "ZAProxy", then click "Install"
Add ZAP program using Custom tools Manage Jenkins -> Global Tool Configuration -> Custom Tool Installations -> Add Installer ->
  * Choose a name (e.g. ZAProxy_2.5.0)
  * Add download to ZAP binary (e.g https://github.com/zaproxy/zaproxy/releases/download/2.5.0/ZAP_2.5.0_Linux.tar.gz)
  * Optional subdirectory of the downloaded and unpacked archive to use as the tool's home directory
  * Save
In new.existing job, make to following changes to the Build Environment: 
  * Check "Install Custom Tools"
  * Click "Add Tool"
  * Select ZAProxy_2.5.0 from dropdown
Add new step to the Build section: 
  * Select "Add Build Step" from dropdown and select "Execute ZAProxy"
Admin configuration: 
  * In "Admin configuration", leave defaults for host/port (unless you have specific settings you need to apply)
Startup: 
  * Click radio "ZAProxy is installed by Jenkins with a plugin like Custom Tools Plugin"
Setup: 
  * Enter target url to crawl
  * Select "Unauthenticated scan" and all scan checbox options
  * Click "generate report" checkbox
  * Select xml and html
  * Enter a filename for the report
  * Note on Save session option: Save session in ZAProxy format. If a session is loaded, it's not necessary to save the loaded session because this loaded session is automatically persisted.
Add HTML reporting as a Post-build action: 
  * Click Add post-build step action and select "Publish Html Reports"
  * Enter in full directory path to where report generated st Build stage is stored
  * Enter your report name in the Index page field (the same name as you entered in the Build section)
Save and Run Build job, and on the job dashboard, you will see link to the resulting report.