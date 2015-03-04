'use strict'

describe('Phone list view search', function() {

  beforeEach(function() {
    browser.get('app/index.html#/phones');
  });

  it('should filter the phone list', function() {

    var phoneList = element.all(by.repeater('phone in phones'));
    var query = element(by.model('query'));
    expect(phoneList.count()).toBe(20);

    query.sendKeys('nexus');
    expect(phoneList.count()).toBe(1);
    query.clear();

    query.sendKeys('motorola');
    expect(phoneList.count()).toBe(8);
  });
});
