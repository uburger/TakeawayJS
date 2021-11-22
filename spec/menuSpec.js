'use strict';

describe ("Menu", function() {

  var menu;

  beforeEach(function() {
    menu = new Menu();
  });


  describe("menu items", function() {
    it("has the correct items", function() {
      expect(menu.items).toEqual({"Pizza": 1,"Pasta": 2, "Coke": 3 })
    });
  });
});
