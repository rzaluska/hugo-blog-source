title: Localization on a zero budget
link: http://jaffamonkey.com/235/localization-on-a-zero-budget
author: jaffamonkey
description: 
post_id: 235
created: 2007/01/15 07:18:38
created_gmt: 2007/01/15 12:18:38
comment_status: open
post_name: localization-on-a-zero-budget
status: publish
post_type: post

# Localization on a zero budget

This was an interesting exercise is battling the odds. I was providing QA management on a mature successful MMORPG that was approaching localization phase. The game was based on open source technology, and had been developed in Agile/SCRUM environment in the US office. The localization was managed from the UK. The first big hurdle was that the game had been totally hardcoded, so initial work was done to externalise all game data. Translations were done by external translations company, but up to the point when I arrived, the translation had been very ad-hoc, leading to basic errors. The localized versions were hosted by various ISPâ€™s in different countries, and their involvement was limited to verifying the translations. There was no real budget allowance for this phase of project, so the first move I made was to streamline the translation process, from the translation company, through development and through to the testing at the end of the cycle. As the data had been externalised into one comprehensive localizer file, I took this as the first point in the cycle. This file was provided (intact) to the translations company. To speed up process, and to ensure file integrity, I specified acceptable methods of viewing and editing this file (I chose Vi, as this had support for multiple language character sets, and there was free version available). In order to keep this file integrity, I used QA as the conduit between various people. Once the translations company had translated the complete localizer file, it was uploaded to shared ftp drive, where QA validated the file integrity, before sending to US dev team for implementation on QA server. The ISP was then asked to validate the localizer file, and then perform some in-game testing to verify correct use of grammar, and identify issues, such as graphic overspill, caused by elongated text. I also used this process as a formal signoff stage, as the informality of the environment meant there was little or no formality. For the business this could prove disastrous as in the event of issues, it was difficult to trace where problem was first initiated.