title: on-the-fly javascript
link: http://jaffamonkey.com/3045/on-the-fly-javascript
author: jaffamonkey
description: 
post_id: 3045
created: 2009/12/09 00:21:57
created_gmt: 2009/12/08 23:21:57
comment_status: open
post_name: on-the-fly-javascript
status: publish
post_type: post

# on-the-fly javascript

Just a good demonstration of things you can do with web pages, on-the-fly with javascript.   **Example -** Go to [Google](http://www.google.com), clear address bar, copy and paste the text below into the address bar, then <ENTER>_.  Make it a link on your toolbar, then click it again and again to change speed._ javascript:R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=document.getElementsByTagName("img"); DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; DIS.position='absolute'; DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"}R++}setInterval('A()',50); void(0);