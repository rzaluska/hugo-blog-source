title: BDD & Continuous Integration
link: http://jaffamonkey.com/10440/bdd-continuous-integration
author: jaffamonkey
description: 
post_id: 10440
created: 2013/11/04 15:56:43
created_gmt: 2013/11/04 15:56:43
comment_status: open
post_name: bdd-continuous-integration
status: publish
post_type: post

# BDD & Continuous Integration

BDD demands a lot of attention, and is definitely not for the faint-hearted.  Be prepared to have all your flaws exposed, and sometimes in ruthless succession. It is why I think more and more than Kanban style is the way forward in management of development, for two key reasons:- 1\. Acceptance of concept of human error, and plans to mitigate that predictability. 2\. Acceptance that plans made today may have to change tomorrow. Continuous Integration (CI) is the part that is supposed to mitigate regression issues - that does not mean regression issues are not possible.It can be a single point of truth for the state of the application, if managed honestly. A strange way to put it? Well ... One of the more ridiculous mantras of over-excited Agile developers, was that regression testing was dead, as the new development approach avoided the need for it.  Largely this assumption was made around increased use Continuous Integration, but comically, the mantra was still issued by those who didn't observe CI principles.  CI practice can mitigate may regression issues, but it has to be **GOOD** practice. A frequently standard CI setup involves many unit tests, testing code in isolation too often, instead of integration tests.  This presents a misleading picture of progress, as the actual benchmark of progress is at business logic level, not code level. Introduce your BDD tests into CI, and you can expect failures every single time, there is no such thing as 100% from an acceptance test point of view.  If it is, then the tests are not extensive enough or unit tests are too low level for any useful test results. Management love hearing such positive reports "95% of our CI tests are passing", without ever questioning what that actually means in terms of delivery. It could mean absolutely nothing, beyond verifying framework modules and/or code (that may or may not be relevant to requirements). 

_Lastly, there is no reason not to have more than one CI process running - one for unit tests, one for BDD tests._

![BDD and Continuous Integration](/wp-content/uploads/2013/11/BDD-CI-350x275.png)