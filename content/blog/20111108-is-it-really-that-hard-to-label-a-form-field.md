title: Is it really that hard to label a form field?
link: http://jaffamonkey.com/4874/is-it-really-that-hard-to-label-a-form-field
author: jaffamonkey
description: 
post_id: 4874
created: 2011/11/08 22:04:48
created_gmt: 2011/11/08 22:04:48
comment_status: open
post_name: is-it-really-that-hard-to-label-a-form-field
status: publish
post_type: post

# Is it really that hard to label a form field?

Web Accessibility - countries that have legal requirement, this isn't optional. It is sad that it takes legality to force websites to comply, even with the basic (and very attainable) Level A compliance. Something such as a form label, regarded as a very low prioirty issue within the SDLC, could prevent a user using accessibility tools to be unable to complete a transcation, or miss an important checkbox option.  Even if your site doesnt have ecommerce features, observing standards will at least improve the performance of your site, cross-browser compatibility and . Developers have long pushed back about coding standards, but observing the forgiving XHTML Transitional standards will bring your overall site coding quality much higher. Its one fo the general guidelines within the WCAG 2.0 Level A. So, I decided to present a basic set of checks that coders can do to prevent those annoying web accessibility issues being found by testers! **Parking these issues, along with other minor issues, is not sensible.** Quick checks - in an hour you can do a reasonably good pass through your website. 

  * All form elements should have identifiers and in some cases labels.
  * It should be possible to navigate your site completely using keyboard, and in logical manner (i.e. sequential)
  * Session timeouts should be pre-empted with popup dialog to prevent "surprise exit"
  * Colours should be chosen from preset guidelines - if you company branding compromises, then seriously consider a change.
  * Run website through tools such as [WebbIE](http://www.webbie.org.uk), which will "speak" the site as you navigate
  * Webbie allows you to traverse the site in Text Only.
  * [Fangs](http://www.standards-schmandards.com/projects/fangs/) plugin will allow you to view webpage as a screenreader would view it.
  * Ensure your website pages comply with [XHTML Transitional Standards](http://validator.w3.org/#validate_by_uri+with_options).
  * Ensure any button actions do not change position of tabbing order (especially within such things as accordians
You can use tools such as 
* [WAVE toolbar](wave.webaim.org/toolbar), which picks up on a lot (but not all) WCAG issues, but for completeness review your site with the guide above, and the official [WCAG 2.0 Guidelines document](www.w3.org/WAI/GL/WCAG20-TECHS/pdf.html).