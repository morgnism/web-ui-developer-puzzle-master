import { $, browser, by, element, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  beforeEach(async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );
  });

  it('Then: I should see my reading list', async () => {
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I can mark a book as finished', async () => {
    // perform search
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    // click want to read button
    const wantToReadBtn = element.all(by.buttonText('Want to Read')).first();
    await wantToReadBtn.click();

    // toggle reading list open
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    // perform finished reading click
    const finishedReadingBtn = await $('button[data-testing="unfinished"]');
    await finishedReadingBtn.click();

    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        $('button[data-testing="finished"]')
      )
    );

    // cleanup
    const removeFromListBtn = await $('button[data-testing="remove"]');
    await removeFromListBtn.click();
  });
});
