title:  Visual Studio Team Test and proxies
link: http://jaffamonkey.com/5034/visual-studio-team-test-and-proxies
author: jaffamonkey
description: 
post_id: 5034
created: 2011/11/18 12:12:20
created_gmt: 2011/11/18 12:12:20
comment_status: open
post_name: visual-studio-team-test-and-proxies
status: publish
post_type: post

#  Visual Studio Team Test and proxies

It's not one of my favourite test tools but sometimes you have to use whats availbale. Team Test, the test tool for TFS/Visual Studio does a fair job of GUI recording tests, though an clunky maintenance nightmare. However this was a resolution given to me, regards problems when accessing websites through the inevitable company proxies.  One of the most common issues around automated testing is dealing with company proxies. The way round it is to create a class containing the proxy and login details. For some reason no automated GUI test tool ever register the proxy login through the recording.   To resolve in Team Test,  create a new C# class and name it what you want (in this example proxy.cs). Click add plugin within web test you want to add it to (the add plugin button is in the test runner toolbar). Save and build - that's it! (Ensure you have **Microsoft.VisualStudio.QualityTools.WebTestFramework.dll** added to your project **_References_** section, to enable usuage of webtest plugins) using System; using Microsoft.VisualStudio.TestTools.WebTesting; using Microsoft.VisualStudio.TestTools.WebTesting.Rules; using System.Net; namespace WebTestPluginNamespace { public class MyProxyWebTestPlugin : WebTestPlugin { public override void PreWebTest(object sender, PreWebTestEventArgs e) { // Create a WebProxy object for your proxy WebProxy webProxy = new WebProxy("http://[proxy url her]"); //Set the WebProxy so that even local addresses use the proxy // webProxy.BypassProxyOnLocal = false; // Use this WebProxy for the Web test e.WebTest.WebProxy = webProxy; e.WebTest.PreAuthenticate = true; NetworkCredential proxyCredentials; proxyCredentials = new NetworkCredential(); proxyCredentials.Domain = ""; proxyCredentials.UserName = "[username here]"; proxyCredentials.Password = "[password here]"; e.WebTest.WebProxy.Credentials = proxyCredentials; } } }