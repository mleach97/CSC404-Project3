var expect = require("chai").expect;
const { describe } = require("mocha");
var controller = require("../controllers/controller");

describe("Compute average of three HW grades", function() {
    it("Avg of (90,90,90) = 18", function() {
        var test1 = controller.computeHW(90, 90, 90);
        expect(test1).to.equal(18);
    });
});
