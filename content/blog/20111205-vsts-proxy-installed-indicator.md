title: vsts-proxy-installed-indicator
link: http://jaffamonkey.com/5225/vsts-proxy-installed-indicator
author: jaffamonkey
description: 
post_id: 5225
created: 2011/12/05 16:50:26
created_gmt: 2011/12/05 16:50:26
comment_status: open
post_name: vsts-proxy-installed-indicator
status: publish
post_type: post

# vsts-proxy-installed-indicator

When setting test settings in TFS/Visual Studio,  you may have come across the following problem with your browser proxy settings being reset, when automated test runs.  Commonly, the following happens to the IE browser proxy settings :- 127.0.0.1 Port: xxxxx (for http and https) and <vsts-proxy-installed-indicator> listed in exceptions. This is due to using ASP.NET in Hosts within Edit Test Settings.  As there is no need to set proxies from VS, select Host type setting within menu option** Test -> Edit Test Settings** as Default. If you are still getting problem above, when running tests then consider examining your plugins. If you leave the setting as **Default**, and there is another app which has ability to define the test settings, then the plugin may override Visual Studio settings. ![](/wp-content/uploads/2011/12/visual-studio-test-settings-300x220.png) From my own experience the Test Manager plugin caused an issue, as it also contains Test Settings that override whatever you set in Visual Studio (regardless of whether app in open OR if you have ever touched the settings). In my example, the Local settings specified with Test Manager had the highlighted entry.  This was exactly the setup I was trying to avoid in my Visual Studio setup. ![](http://jaffamonkey.com/wp-content/uploads/2011/12/visual-studio-test-manager-plugin-settings1-300x234.png) To avoid these type of issues, always check plugin settings (if configurable), and check they match what you are trying to setup in Visual Studio test run settings.