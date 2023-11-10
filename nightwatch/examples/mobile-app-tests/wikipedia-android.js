describe('Wikipedia Android app test', function () {
  before(function (app) {
    app.click('id', 'org.wikipedia:id/fragment_onboarding_skip_button');
  });

  it('Search for BrowserStack', function (app) {
    this.timeout(30000)
    app
      .click('id', 'org.wikipedia:id/search_container')
      .waitForElementVisible('id', 'org.wikipedia:id/search_src_text', 10000)
      .sendKeys('id', 'org.wikipedia:id/search_src_text', 'messi',)
      .click({ selector: '//android.widget.TextView[@resource-id="org.wikipedia:id/page_list_item_title" and @text="Lionel Messi"]', locateStrategy: 'xpath', })
      .waitForElementVisible('id', 'org.wikipedia:id/page_web_view', 10000)
      .assert.textEquals({ locateStrategy: 'xpath', selector: '//android.view.View[@resource-id="pcs"]/android.view.View[1]/android.view.View[1]' }, 'Lionel Messi')
  });
});