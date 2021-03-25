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

  describe('Undo add/remove', () => {
    beforeEach(async () => {
      const form = await $('form');
      const input = await $('input[type="search"]');
      await input.sendKeys('javascript');
      await form.submit();
    });

    it('Then: I can undo adding a book to my reading list', async () => {
      // click want to read button
      const wantToReadBtn = element.all(by.buttonText('Want to Read')).first();
      await wantToReadBtn.click();

      // perform undo action
      await browser.executeScript(
        'document.querySelectorAll("simple-snack-bar > div >  button")[0].click()'
      );

      // toggle reading list open
      const readingListToggle = await $('[data-testing="toggle-reading-list"]');
      await readingListToggle.click();

      await browser.wait(
        ExpectedConditions.textToBePresentInElement(
          $('[data-testing="reading-list-container"]'),
          `You haven't added any books to your reading list yet.`
        )
      );
    });

    it('Then: I can undo removing a book from my reading list', async () => {
      // click want to read button
      const wantToReadBtn = element.all(by.buttonText('Want to Read')).first();
      await wantToReadBtn.click();

      // toggle reading list open
      const readingListToggle = await $('[data-testing="toggle-reading-list"]');
      await readingListToggle.click();

      // perform remove from list
      const removeFromListBtn = await $(`.reading-list-item button`);
      await removeFromListBtn.click();

      // perform undo action
      await browser.executeScript(
        'document.querySelectorAll("simple-snack-bar > div >  button")[0].click()'
      );

      await browser.wait(
        ExpectedConditions.elementToBeClickable($('.reading-list-item button'))
      );

      // cleanup
      await removeFromListBtn.click();
    });
  });
});
