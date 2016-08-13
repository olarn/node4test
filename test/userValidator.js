var expect = require("chai").expect;
var userValidator = require("../controllers/userValidator");

describe("Test validate user and password", function() {

  describe("with user 'demo' and password 'mode'", function() {
    it("should return true", function() {
      
      // arrange
      var user = "demo";
      var pass = "mode";

      // action
      var result = userValidator.validate(user, pass);

      // assert
      expect(result).to.equal(true);
    });
  });

  describe("with user 'demo' and password 'demo'", function() {
    it("should return false", function() {
      
      // arrange
      var user = "demo";
      var pass = "demo";

      // action
      var result = userValidator.validate(user, pass);

      // assert
      expect(result).to.equal(false);
    });
  });

});