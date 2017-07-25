title: Gherkin to page object, in easy steps
link: http://jaffamonkey.com/11359/gherkin-to-page-object-in-easy-steps
author: jaffamonkey
description: 
post_id: 11359
created: 2015/05/21 19:04:24
created_gmt: 2015/05/21 19:04:24
comment_status: closed
post_name: gherkin-to-page-object-in-easy-steps
status: publish
post_type: post

# Gherkin to page object, in easy steps

Feature: As a user,   I want to be able to see accurate count of search terms in search results.
    
    Scenario: Check for search term count on page     
    Given I am on the homepage   
    And I fill in "Behat" for "s"     
    And I press "Search"     
    Then I should see "Behat"     
    And count of "24" instances of "Behat" exists on page
    

Lets take the last step and follow it through to the test code. behat uses regex to parse the natural language line, to map to particular test code, in this case the countTheElements function. 
    
    
    /**  
    * @Then /^count of "([^"]*)" instances of "(?P[^"]*)" exists on page$/  
    */
     public function countOfExistsOnPage($count, $area) 
    {     
    # calls the Homepage class which contains the test function code
    $this->getPage('Homepage')->countTheElements($count, $area); 
    }
    

Test code can get messy quickly, so following [page objects](http://behat-page-object-extension.readthedocs.org/en/latest/guide/working_with_page_objects.html#creating-a-page-object-class) approach is sensible both for readability and reusability. So the actual functional code is stored in another file. This approach means both the Gherkin AND code is more reusable. 
    
    
    namespace Page;
    
    use SensioLabs\Behat\PageObjectExtension\PageObject\Page;
    use Behat\Mink;
    
    class Homepage extends Page
    {
    .............
    /**  
    * @param string $count  
    * @param string $area  
    * @return Page  
    * @throws \Exception  
    */
     public function countTheElements($count, $area)
     {     
    $str = $this->getDriver()->getContent();     
    $count2 = substr_count($str, $area);     
    if ($count != $count2) 
    {         
    throw new \Exception($count . ' is incorrect, it should be: ' . $count2);     
    }
    ;
     }