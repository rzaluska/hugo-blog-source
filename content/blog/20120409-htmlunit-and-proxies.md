title: HTMLUnit and Proxies
link: http://jaffamonkey.com/6798/htmlunit-and-proxies
author: jaffamonkey
description: 
post_id: 6798
created: 2012/04/09 16:39:28
created_gmt: 2012/04/09 16:39:28
comment_status: open
post_name: htmlunit-and-proxies
status: publish
post_type: post

# HTMLUnit and Proxies

Proxies are bain of automated testing, but there is simple way to both create a profile add proxy details, along with username and password (often forgotten in proxy tutorials). Here is the Java code that solves issue, when using Selenium Web Driver and HTMLUnit.  public WebDriver createHtmlUnitWebDriver() { HtmlUnitDriver htmlUnitDriver = new HtmlUnitDriver() { @Override protected WebClient modifyWebClient(WebClient client) { client.setProxyConfig(new ProxyConfig(PROXY_HOST, PROXY_PORT)); DefaultCredentialsProvider credentialsProvider = new DefaultCredentialsProvider(); credentialsProvider.addCredentials("username", "password"); credentialsProvider.addProxyCredentials("username", "password", PROXY_HOST, PROXY_PORT); client.setCredentialsProvider(credentialsProvider); return client; } }; htmlUnitDriver.setProxy(PROXY_HOST, PROXY_PORT); htmlUnitDriver.setJavascriptEnabled(true); return htmlUnitDriver; } public WebDriver createFirefoxWebDriver() { FirefoxProfile firefoxProfile = new FirefoxProfile(); firefoxProfile.setPreference("network.proxy.type", 1); firefoxProfile.setPreference("network.proxy.http", PROXY_HOST); firefoxProfile.setPreference("network.proxy.http_port", PROXY_PORT); firefoxProfile.setPreference("network.proxy.ssl", PROXY_HOST); firefoxProfile.setPreference("network.proxy.ssl_port", PROXY_PORT); firefoxProfile.setPreference("network.proxy.no_proxies_on", ""); return new FirefoxDriver(firefoxProfile); } HtmlUnitDriver htmlUnitDriver = new HtmlUnitDriver(); htmlUnitDriver.get("http://www.google.com");