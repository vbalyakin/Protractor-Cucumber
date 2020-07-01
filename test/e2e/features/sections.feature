@westernShop
Feature: Access to shop site

	Background: Download main page
		Given I open "main page" url
		When Section "shop section" is visible

	@store
	Scenario: Verify user can view "shop menu" button
		Then Section "shop menu" is visible

	@specialOffer
	Scenario: User can open "my cloud home" offer
		And Section "save everything at home" is visible
		Then Section "shop now" is visible
		When I click on "shop now" button
		And I refresh promo page
		Then "promotions page" should be present
		And I scroll to the "bottom" of current page
		Then Section "contact phone" is visible

	@productsByBrand
	Scenario Outline: Verify user can view "<brand>" products panel
		Then Section "shop menu" is visible
		When I move mouse to "shop menu" button
		And I move mouse to "<brand>" button
		Then Section "<all brand products>" is visible

		Examples:
			| brand        | all brand products        |
			| wd           | all wd products           |
			| sandisk      | all sandisk products      |
			| g-technology | all g-technology products |
