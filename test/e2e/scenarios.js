'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should display two phones', function(){
    var list = element.all(by.css('ul li'));
    expect(list.count()).toBe(2);
  });

  it('should display total number', function(){
    var pEl = element.all(by.css('p')).last();
    expect(pEl.getText()).toEqual('Total number of phones: 2');
  });
});
