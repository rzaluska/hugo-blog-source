title: Synchronizing 2 JIRA Instances
link: http://jaffamonkey.com/3422/synchronizing-2-jira-instances
author: jaffamonkey
description: 
post_id: 3422
created: 2010/12/16 10:23:39
created_gmt: 2010/12/16 15:23:39
comment_status: open
post_name: synchronizing-2-jira-instances
status: publish
post_type: post

# Synchronizing 2 JIRA Instances

The basis for this example is interaction between Helpdesk issues that need escalation to development, and integrating that into some kind of workflow between 2 JIRA's. 1\. On JIRA Helpdesk System create a project, and add workflow step for issue escalation (i.e. an issue that has to progress onto JIRA Project system). This can just be a basic custom field, as a means of filtering for next step... 2\. At regular timed intervals Issues escalations (i.e. issues with new status, say "Escalate") are exported to XML.  3\. At regular timed intervals that XML (i.e. issues with new status, say "Escalate") are imported to the other JIRA instance and reviewed and assigned as any other issue. Probably sensible to create a holding project for these imported issues. This has added advantage that you can keep the migration simple, as each project structure can be identical. 4\. When issue resolved the issues are exported (again, every hour/day/etc..) and reimported to Helpdesk, with updates to the status and resolutions. _The imports/exports can be done via Jelly scripting._ So in summary, the process could be:- 1\. Raise issue in JIRA Helpdesk instance 2\. Issue for escalation marked as such. 3\. Issue captured in timed export to XML process. 4\. Heldesk Issues in above export are imported into JIRA Project instance in regularly timed import. 5\. Import script will place these in created helpdesk project, for review/assignment. 6\. Helpdesk issue progressed the same as project issue (possible point for using CLONE to replicate the issue on the Heldesk project and Development project). 7\. In course of issue progress, the regular import/export process will update the Helpdesk record also. 8\. Once issue Resolved in JIRA project, the Helpdesk will close issue after they have followed their closure process. 9\. Again updates at this point are carried though the JIRA Project