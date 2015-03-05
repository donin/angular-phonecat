'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  
  it('should open homepage',function(){
    expect(browser.getCurrentUrl()).toMatch('app/index.html');
  });
 
});
