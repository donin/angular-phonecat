'use strict';

describe('PhoneCat App', function() {
  it('should redirect index.html to index.html#/phones', function() {
    browser.get('app/index.html');
    expect(browser.getLocationAbsUrl()).toBe('/phones');
  });
});

