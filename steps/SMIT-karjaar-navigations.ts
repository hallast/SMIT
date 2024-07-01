import { Given, When, Then } from "cucumber";
import { t, RequestLogger } from "testcafe";
import karjaarPage from "../pages/karjaarPageElements";
import { config } from '../config';

Given("I am on SMIT karjaar page", async () => {
  await t.navigateTo('https://www.smit.ee/et/karjaar').maximizeWindow().wait(5000);
});

// Need to scroll down for the links menu to be visible
When('I click on second link', async function() {  
  await t.click(karjaarPage.openPositionsLink);
});

Then('I should navigate down to page section about open positions', async function() {
    await t.expect(karjaarPage.openPositionsHeader.innerText).contains("Vabad töökohad").wait(3000);
    
});


Given("I am at open positions section at SMIT karjaar page", async () => {
  await t.navigateTo('https://www.smit.ee/et/karjaar').maximizeWindow().wait(5000);
  // Need to scroll down for the links menu to be visible
  await t.click(karjaarPage.openPositionsLink);
});

When('I click on button ESITA', async function() {  
  await t.click(karjaarPage.esitaButton);
});

Then('I should see application page', async function() {
    await t.expect(karjaarPage.applicationHeader.innerText).contains("Liitu smitikatega!").wait(3000);
    
});