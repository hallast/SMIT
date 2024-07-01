Feature: sample navigations tests for SMIT karjaar page  
    
   

    @smit    
    Scenario: SMIT karjaar page navigation 
        Given I am on SMIT karjaar page
        When I click on second link 
        Then I should navigate down to page section about open positions   
 
    
    @smit    
    Scenario: Open SMIT application page 
        Given I am at open positions section at SMIT karjaar page
        When I click on button ESITA 
        Then I should see application page    
        