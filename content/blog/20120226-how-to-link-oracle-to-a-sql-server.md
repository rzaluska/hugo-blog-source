title: How to Link Oracle to a SQL Server
link: http://jaffamonkey.com/6607/how-to-link-oracle-to-a-sql-server
author: jaffamonkey
description: 
post_id: 6607
created: 2012/02/26 02:03:23
created_gmt: 2012/02/26 02:03:23
comment_status: open
post_name: how-to-link-oracle-to-a-sql-server
status: publish
post_type: post

# How to Link Oracle to a SQL Server

> Nowadays I like to think of SQL Server and Oracle as the Death Stars of the relational database universe. Extremely powerful. Monolithic. Brilliant. Complex almost beyond the ability of a single human mind to understand. And a monumental waste of money except in those rare situations when you actually need to destroy a planet. [Are Commercial Databases Worth It?](http://www.codingthewheel.com/archives/are-commercial-databases-worth-it)

Now firstly, assume this isn't out of choice - how could it be? If a company has stumped up for an Oracle licence, then develops applications using SQLServer, then either something is wrong with overall company strategy, or development are being forced to get two applications to talk to each other, without architectural change. Secondly, this behaviour is largely around the lack of skills available in either the two databases. DBA's have become a much rarer sight, and anyone with half ounce of SQL knowledge can (and will) be let loose on SQLServer. Having sdaid that, here is how to link up the two monolithic archaic monstrosities. You can create a link in SQL Server to the Oracle server using an internal stored procedure and the Oracle drivers 1\. Open  "SQL Server Management Studio." 2\. Click your database name on the left and then click "New Query" in the toolbar. This opens a SQL editor. 3\. Type the following SQL code into the text editor: EXEC sp_addlinkedserver @server = N'ServerName', @srvproduct = N'Oracle', @provider = N'MSDAORA', @datasrc = N'DatabaseName'; GO Replace "ServerName" with your Oracle server name and replace "DatabaseName" with the name of the database. 4\. Press "F5" to execute the code. This links the Oracle database to the SQL Server so you can query both databases simultaneously. ![Oracle SqlServer](/wp-content/uploads/2012/02/oracle_sql_server.gif)

#### How to Link to an Oracle Table From an SQL Server

1\. Click the Windows "Start" button and select "All Programs." Click "SQL Server" and then click "SQL Server Management Studio." This opens your main console. 2\. Right-click your SQL Server database name on the left and select "New Query." This opens an editor where you enter your stored procedure command. 3\. Enter the following text into the editor: EXEC sp_addlinkedserver 'OracleLinkedServer', 'MSDAORA', 'OracleServer' The "OracleLinkedServer" is the name of the link, which is shown in your SQL Server console. The "OracleServer" parameter is the name of your Oracle server database. The "MSDAORA" is the required Oracle database driver. 4,. Press the "F5" key to execute the linked server command. Notice on the left side of the window that the linked server name is listed.