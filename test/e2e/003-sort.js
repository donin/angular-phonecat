'use strict';

describe('Phone list view sort',function(){
  beforeEach( function(){
    browser.get('app/index.html#/phones');
  });

  it('should be possible to sort search results',function(){
    var phoneNameColumn = element.all(by.repeater('phone in phones')
                                      .column('phone.name'));
    var query = element(by.model('query'));

    function getNames() {
      return phoneNameColumn.map(function(elm) {
        return elm.getText();
        });
      }

    //let's narrow the dataset to make the test assertions shorter
    query.sendKeys('tablet'); 
    expect(getNames()).toEqual([
      "Motorola XOOM\u2122 with Wi-Fi",
      "MOTOROLA XOOM\u2122"
      ]);

    element(by.model('orderProp'))
      .element(by.css('option[value="name"]')).click();

    expect(getNames()).toEqual([
      "MOTOROLA XOOM\u2122",
      "Motorola XOOM\u2122 with Wi-Fi"
    ]);
  });
});
