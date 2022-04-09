var expect = require("chai").expect;
const { describe, assert, it } = require("mocha");
var controller = require("../controllers/controller");

describe("Test computeHW", function() {
    describe("Test boundary values of computeHW", function() {
        it("Avg of (90,90,90) = 18", function() {
            var test = controller.computeHW(90, 90, 90);
            expect(test).to.equal(18);
        });
        it("Avg of (100,100,100) = 20", function() {
            var test = controller.computeHW(100, 100, 100);
            expect(test).to.equal(20);
        });
        it("Avg of (0,0,0) = 0", function() {
            var test = controller.computeHW(0, 0, 0);
            expect(test).to.equal(0);
        });
        it("Avg of (100,0,0) = 0", function() {
            var test = controller.computeHW(100,0,0);
            expect(test).to.equal(0);
        });
        it("Avg of (101,0,0) = 0", function() {
            var test = controller.computeHW(0, 0, 0);
            expect(test).to.equal(0);
        });
        it("Avg of (0,100,0) = 0", function() {
            var test = controller.computeHW(0,100,0);
            expect(test).to.equal(0);
        });
        it("Avg of (0,101,0) = 0", function() {
            var test = controller.computeHW(0,101,0);
            expect(test).to.equal(0);
        });
        it("Avg of (0,0,100) = -1", function() {
            var test = controller.computeHW((0,0,100);
            expect(test).to.equal(-1);
        });
        it("Avg of (0,0,101) = -1", function() {
            var test = controller.computeHW(0,0,101);
            expect(test).to.equal(-1);
        });
        it("Avg of (87,48,93) = 15", function() {
            var test = controller.computeHW(87,48,93);
            expect(test).to.equal(15);
        });
        it("Avg of (13,65,84) = 11", function() {
            var test = controller.computeHW(13,65,84);
            expect(test).to.equal(11);
        });
        it("Avg of (74,27,55) = 10", function() {
            var test = controller.computeHW(74,27,55);
            expect(test).to.equal(10);
        });
        it("Avg of (12,36,15) = 4", function() {
            var test = controller.computeHW(12,36,15);
            expect(test).to.equal(4);
        });
        it("Avg of (66,63,86) = 14", function() {
            var test = controller.computeHW(66,63,86);
            expect(test).to.equal(14);
        });
        it("Avg of (78,55,81) = 14", function() {
            var test = controller.computeHW(78,55,81);
            expect(test).to.equal(14);
        });
        it("Avg of (87,33,-13) = -1", function() {
            var test = controller.computeHW(87,33,-13);
            expect(test).to.equal(-1);
        });
        it("Avg of (80,88,93) = 17", function() {
            var test = controller.computeHW(80,88,93);
            expect(test).to.equal(17);
        });
        it("Avg of (64,69,53) = 12", function() {
            var test = controller.computeHW(64,69,53);
            expect(test).to.equal(12);
        });
        it("Avg of (55,52,49) = 10", function() {
            var test = controller.computeHW(55,52,49);
            expect(test).to.equal(10);
        });
        it("Avg of (30,44,39) = 8", function() {
            var test = controller.computeHW(30,44,39);
            expect(test).to.equal(8);
        });
        it("Avg of (33,-65,34) = -1", function() {
            var test = controller.computeHW(33,-65,34);
            expect(test).to.equal(-1);
        });
        it("Avg of (27,19,24) = 5", function() {
            var test = controller.computeHW(27,19,24);
            expect(test).to.equal(5);
        });
        it("Avg of (88,79,89) = 17", function() {
            var test = controller.computeHW(88,79,89);
            expect(test).to.equal(17);
        });
        it("Avg of (89,81,76) = 16", function() {
            var test = controller.computeHW(89,81,76);
            expect(test).to.equal(16);
        });
        it("Avg of (91,85,90) = 18", function() {
            var test = controller.computeHW((91,85,90);
            expect(test).to.equal(18);
        });
        it("Avg of (-97,98,91) = -1", function() {
            var test = controller.computeHW(-97,98,91);
            expect(test).to.equal(-1);
        });
        it("Avg of (15,22,19) = 4", function() {
            var test = controller.computeHW(15,22,19);
            expect(test).to.equal(4);
        });
        it("Avg of (14,9,6) = 2", function() {
            var test = controller.computeHW(14,9,6);
            expect(test).to.equal(2);
        });
        it("Avg of (11,15,16) = 3", function() {
            var test = controller.computeHW(11,15,16);
            expect(test).to.equal(3);
        });
        it("Avg of (99,94,94) = 19", function() {
            var test = controller.computeHW(99,94,94);
            expect(test).to.equal(0);
        });
        it("Avg of (101,153,999) = -1", function() {
            var test = controller.computeHW(101,153,999);
            expect(test).to.equal(-1);
        });
    });

    describe("Test out of bounds", function() {
        it("Avg of (-100,100,100) = -1", function() {
            var test = controller.computeHW(-100, 100, 100);
            expect(test).to.equal(-1);
        });
    });
});

// describe("Test ")

// describe('Test Suite 1 - test computeHW',  ()=> {
//     it('should pass this test', function (){)
//         assert.equal(computeHW(100, 100, 100), 20, 'It should be equal to 20');
//     });
// });

// describe('Test Suite 2 - test computeHW',  ()=> {
//     it('should pass this test', function (){
//         assert.equal(computeHW(0, 0, 0), 0, 'It should be equal to 0');
//     });
// });

// describe('Test Suite 3 - test computeHW',  ()=> {
//     it('should fail this test', function (){
//         assert.equal(computeHW(-100, 100, 100), 20, 'It should be equal to 20');
//     });
// });
