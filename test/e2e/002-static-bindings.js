'use strict';

describe('Homepage',function(){
  it('should display static bindings',function(){
    browser.get('app/index.html');
    expect(element(by.exactBinding('1 + 2')).getText()).toMatch('3');
  });
});
