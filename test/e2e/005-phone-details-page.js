'use strict'

describe('Phone specific page',function(){
  beforeEach(function(){
    browser.get('app/index.html#/phones/nexus-s');
  });

  it('should display nexus-s page',function(){
    //<h1>{{phone.name}}</h1>
    expect(element(by.binding('phone.name')).getText()).toBe('Nexus S'); 
  });

  it('should display the first phone image as the main',function(){
    expect(element(by.css('img.phone.active'))
      .getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
  });

  it('swap main image if a thumb is clicked on',function(){
    element(by.css('.phone-thumbs li:nth-child(3) img')).click();
    expect(element(by.css('img.phone.active'))
      .getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);

    element(by.css('.phone-thumbs li:nth-child(1) img')).click();
    expect(element(by.css('img.phone.active'))
      .getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
  });
});
