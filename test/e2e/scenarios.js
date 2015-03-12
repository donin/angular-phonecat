'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should print hello world',function(){
    var el = element.all(by.css('p'));
    expect(el.first().getText()).toEqual('Hello, World!');
  });

  it('should display three phones',function(){
    var list = element.all(by.repeater('phone in phones')
      .column('phone.name')); 
      
    expect(list.map(function(elm){
        return elm.getText();
      })).toEqual(['Nexus S', 'Motorola XOOM™ with Wi-Fi', 'MOTOROLA XOOM™']);
  });

  it('should display total number of phones',function(){
    var el = element.all(by.css('p')).last();
    expect(el.getText()).toBe('Total number of phones: 3');
  });

  it('should display 4x4 table', function(){
    expect(element.all(by.css('table tr')).count()).toBe(5);
    expect(element.all(by.css('table td')).count()).toBe(16);
  });
});
