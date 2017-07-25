title: Setting up virtual host in Linux (Mint)
link: http://jaffamonkey.com/10133/setting-up-virtual-host-in-linux-mint
author: jaffamonkey
description: 
post_id: 10133
created: 2013/08/30 19:13:18
created_gmt: 2013/08/30 19:13:18
comment_status: open
post_name: setting-up-virtual-host-in-linux-mint
status: publish
post_type: post

# Setting up virtual host in Linux (Mint)

**Setting up virtual host in Linux (Mint) with Apache** [code language="bash"]sudo gedit /etc/apache2/httpd.conf[/code] Add the following line to this file [code language="bash"] ServerName [your hostname] DocumentRoot [path to web app directory] SetEnv APPLICATION_ENV "development" DirectoryIndex index.php AllowOverride All Order allow,deny Allow from all [/code] 2\. Edit the httpd.conf using the following command on terminal- sudo gedit /etc/hosts Add the following line to this file- [cc]127.0.0.1 [your hostname][/cc] [code language="bash"]sudo a2enmod rewrite sudo updatedb cd /etc/apache2/mods-enabled touch rewrite.load sudo gedit rewrite.load[/code] If you dont get the following line in your editor then add it- [code language="bash"]LoadModule rewrite_module /usr/lib/apache2/modules/mod_rewrite.so[/code] Restart your apache- [code language="bash"]$ sudo /etc/init.d/apache2 restart[/code]