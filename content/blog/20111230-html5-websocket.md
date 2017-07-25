title: HTML5 WebSockets
link: http://jaffamonkey.com/5595/html5-websocket
author: jaffamonkey
description: 
post_id: 5595
created: 2011/12/30 13:05:14
created_gmt: 2011/12/30 13:05:14
comment_status: open
post_name: html5-websocket
status: publish
post_type: post

# HTML5 WebSockets

Up to now, the main buzz around HTML5 has been playing video without javascript (notably AJAX), and the rounded corners.  Hardly felt revolutionary.  But then I came across another interesting feature that HTML5 and compatible browsers could deliver.  Real-time interaction, using websockets.  http only allows one way traffic, i.e. a request and response never happen at the same time, and a response cannot be sent without a request. Because of the speed of response/request traffic is of course beyond our comprehension, we cannot process any other evidence apart from what we see and experience.   Real-time on the web hasn't been real on majority of sites - its a coding conjuring trick. The main problem with developing websites that rely on high degree of interaction (e.g. social networking site), is that http constrictions mean that there is a constant flow of requests to server to get updates, whether there is one or not.  You can imagine the overhead on a system with this constant activity.  The HTML5 WebSocket API is now supported by many newer  browser versions, and allows you to open a connection to a server using the new ws protocol. Once the connection is open, it remains open for that session. It allows communication in both directions simultaneously. It also has much less overhead than repeatedly polling a server to see if anything has changed. Previously, such functionality was only available using plugin technologies. Web Sockets can make applications faster, more efficient, and more scalable. Though HTML5 is still in it's infancy, regards wholesale adoption - websockets is something that can be adopted and used now, and to great effect if you have a website that has a lot of inefficiency around server-polling. Most server-polling results in no update/change. As the website is effectively running blind using http protocol, the only way round that constriction is to keep polling server at intervals. Also nice to have some real-world comparison, so .... 

> #### **http**
> 
> It's a bit like going to the kitchen every 10 seconds to check if the kettle has boiled yet. Though at some point the kettle will be boiled, all of those checks, bar the one that discovers that the kettle is boiled, are useless (there's the overhead). 
> 
> #### **websockets**
> 
> All you are interested in is the point when kettle is boiled, then the next phase of coffee making can start. so what you need is for the kettle to tell you it's boiled and prompt you to take the next step (less overhead and no pointless journeys to and from the kitchen).

What this all reminds me of, is that the web is still a "baby", that still needs a lot of steering. To see if your current browser supports websockets API, go to [this website](http://websocket.org/echo.html). 

#### Websockets overview

 

#### Comparison demo of websockets and http methods

[youtube]http://www.youtube.com/watch?v=Z897fkPn7Rw[/youtube]