title: Autologin using javascript
link: http://jaffamonkey.com/3808/autologin-using-javascript
author: jaffamonkey
description: 
post_id: 3808
created: 2011/04/10 16:30:19
created_gmt: 2011/04/10 20:30:19
comment_status: open
post_name: autologin-using-javascript
status: publish
post_type: post

# Autologin using javascript

![](http://blog.jaffamonkey.com/files/2011/04/back-door.jpg)I was struggling to find CURL solution to an automatic login (silent login), specifically for a dynamic login form. e.g. http://autologin.com/admin.php?action=login.  Seems to be a struggle with CURL, and so tried a javascript based solution instead. Below is a kinda a "dirty" solution I guess, though easily implemented for https URL's also, which will make it more secure.  And more importantly - it works.  <html> <head> <script LANGUAGE="JavaScript"> function submit() { var usernameField = returnObjById('user_name'); var passwordField = returnObjById('user_password'); usernameField.value = 'test'; passwordField.value = 'test'; document.forms.frmLogin.submit(); } function returnObjById( id ) { if (document.getElementById) var returnVar = document.getElementById(id); else if (document.all) var returnVar = document.all[id]; else if (document.layers) var returnVar = document.layers[id]; return returnVar; } </script> </head> <body onLoad="submit();"> <form action="http://autologin.com/admin.php?action=login" method="post" id="frmLogin" name="frmLogin"> <input type="hidden" name="login_user" value="1" /> <p> <label><?php echo $AB_LANG_ADMIN['Username']; ?>:</label> <input type="text" name="user_name" id="user_name" /> </p> <p> <label><?php echo $AB_LANG_ADMIN['Password']; ?>:</label> <input type="user_password" name="user_password" id="user_password" /> </p> <p> <label> </label> <input type="submit" name="login" value="login" /> </p> </form> </body> </html> `