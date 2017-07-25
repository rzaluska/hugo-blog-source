title: Biff #bash bosh
link: http://jaffamonkey.com/10533/biff-bash-bosh
author: jaffamonkey
description: 
post_id: 10533
created: 2013/11/19 16:59:17
created_gmt: 2013/11/19 16:59:17
comment_status: open
post_name: biff-bash-bosh
status: publish
post_type: post

# Biff #bash bosh

Shell scripts can prove a very useful and quick way to get tedious tasks done. The shell script below creates multiple directories "1000000001" to ""1000000050". To create a shell script:- [code language="bash"]# sudo nano createdirs.sh[/code] Now add the code below and save [code language="bash"] n=1000000001; max=1000000050; while [ "$n" -le "$max" ]; do mkdir "$n" n=`expr "$n" + 1`; done[/code] To run [code language="bash"]# ./createdirs.sh[/code]