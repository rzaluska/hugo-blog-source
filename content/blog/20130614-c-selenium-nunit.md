title: C#, Selenium & NUnit
link: http://jaffamonkey.com/9584/c-selenium-nunit
author: jaffamonkey
description: 
post_id: 9584
created: 2013/06/14 23:18:40
created_gmt: 2013/06/14 23:18:40
comment_status: open
post_name: c-selenium-nunit
status: publish
post_type: post

# C#, Selenium & NUnit

This trio provides a quick and easy way to set up UI-driven tests with Selenium webdriver, and Visual Studio, C# and NUnit to create and initiate the tests.  Here is a step by step guide, using the customary google search scenario as example (fast becoming the "Hello World!" of testing).

##### MINIMUM SOFTWARE REQUIREMENTS

Microsoft Visual Studio 2010 NUnit 2.6+ Selenium WebDriver 

##### SET-UP INSTRUCTIONS:

To install the Selenium WebDriver project: 

  * Create a new Project with C# Class Library and save it.
  * Rename the class ‘Class1.cs’ to ‘Driver.cs’.
  * Download and install NuGet Package Manager using Tools -> Extension Manager.
  * Restart MS Visual Studio in order for the changes to take effect.
  * Go to Package Manager Console install the latest version of Selenium WebDriver by running the command Install-Package Selenium.WebDriver -Version 2.20.0
  * Install the latest version of Selenium WebDriver Support Classes by running the command Install-Package Selenium.Support

##### Referencing the NUnit Library:

  * Download the latest NUnit framework from the site: http://www.nunit.org
  * Install the NUnit software on your machine.
  * In Visual Studio, Go to the Project -> Add Reference menu item.
  * When the Add Reference dialog appears, click on ‘Browse’ and navigate to _C:Program Files (x86)NUnit x.x.xbinframework and select nunit.framework.dll_.
Sample test scenario: As an end user, I would like to visit the google search page And then I would like to search an item so that I can view the search results Steps: 
  1. Define the browser on which the tests needs to be executed in [SetUp] attribute.
  2. In the [Test] attribute, navigate to the google search page.
  3. In the [Test] attribute, find the text input element by its name. Here, the element name for the search field is ‘q’, which is identified using the Firebug (Add-ons for Firefox).
  4. In the [Test] attribute, input the search text and submit the form.
  5. In the [Test] attribute, validate the result using Assert method.

##### TEST EXECUTION INSTRUCTIONS:

Copy and paste the code snippet below into your Visual Studio 2010. `using System; using System.Collections.Generic; using System.Linq; using System.Text; using NUnit.Framework; using OpenQA.Selenium; using OpenQA.Selenium.Firefox; using OpenQA.Selenium.Support.UI;` namespace TestAutomation { [TestFixture] public class Driver { IWebDriver driver; [SetUp] public void Setup() { // Create a new instance of the Firefox driver driver = new FirefoxDriver(); } [TearDown] public void Teardown() { driver.Quit(); } [Test] public void GoogleSearch() { //Navigate to the site driver.Navigate().GoToUrl("http://www.google.com"); // Find the text input element by its name IWebElement query = driver.FindElement(By.Name("q")); // Enter something to search for query.SendKeys("jaffamonkey"); // Now submit the form query.Submit(); // Google's search is rendered dynamically with JavaScript. // Wait for the page to load, timeout after 5 seconds WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(5)); wait.Until((d) => { return d.Title.StartsWith("jaffamonkey"); }); //Check that the Title is what we are expecting Assert.AreEqual("jaffamonkey - Google Search", driver.Title); } } }

##### Running the tests using NUnit

  1. In Visual Studio, Go to Projects -> Project Properties
  2. Click on the ‘Debug’ tab.
  3. Set the ‘Start external program’ to the location of NUnit exe file (C:Program Files (x86)NUnit x.x.xbinnunit-x86.exe).
  4. Build the solution, Go to ‘Build -> Build Solution’ (hit the F6 key) in Visual Studio.
  5. Execute the test, Go to ‘Debug -> Start Debugging’ (hit the F5 key) in Visual Studio. Visual Studio invokes the NUnit application.
  6. In NUnit, click on ‘File -> Open Project’ and choose the location of the [Project Name].dll
  7. In NUnit, click on the ‘Run’ button to run the tests.
Test is executed using NUnit and the result(s) are displayed in NUnit GUI window.