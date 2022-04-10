var expect = require("chai").expect;
const { describe, assert, it } = require("mocha");
var controller = require("../controllers/controller");

describe("Test computeHW. Averages are weighted to be 20% of final grade. Function returns -1 if input is out of bounds.", function() {
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
        it("Avg of (100,0,0) = 6.66", function() {
            var test = controller.computeHW(100,0,0);
            expect(test).to.equal(6.666666666666668);
        });
        it("Avg of (101,0,0) = -1", function() {
            var test = controller.computeHW(101, 0, 0);
            expect(test).to.equal(-1);
        });
        it("Avg of (0,100,0) = 6.666666666666668", function() {
            var test = controller.computeHW(0,100,0);
            expect(test).to.equal(6.666666666666668);
        });
        it("Avg of (0,101,0) = 0", function() {
            var test = controller.computeHW(0,101,0);
            expect(test).to.equal(-1);
        });
        it("Avg of (0,0,100) = 6.666666666666668", function() {
            var test = controller.computeHW(0,0,100);
            expect(test).to.equal(6.666666666666668);
        });
        it("Avg of (0,0,101) = -1", function() {
            var test = controller.computeHW(0,0,101);
            expect(test).to.equal(-1);
        });
        it("Avg of (87,48,93) = 15.200000000000001", function() {
            var test = controller.computeHW(87,48,93);
            expect(test).to.equal(15.200000000000001);
        });
        it("Avg of (13,65,84) = 10.8", function() {
            var test = controller.computeHW(13,65,84);
            expect(test).to.equal(10.8);
        });
        it("Avg of (74,27,55) = 10.4", function() {
            var test = controller.computeHW(74,27,55);
            expect(test).to.equal(10.4);
        });
        it("Avg of (12,36,15) = 4.2", function() {
            var test = controller.computeHW(12,36,15);
            expect(test).to.equal(4.2);
        });
        it("Avg of (66,63,86) = 14.333333333333336", function() {
            var test = controller.computeHW(66,63,86);
            expect(test).to.equal(14.333333333333336);
        });
        it("Avg of (78,55,81) = 14.266666666666666", function() {
            var test = controller.computeHW(78,55,81);
            expect(test).to.equal(14.266666666666666);
        });
        it("Avg of (87,33,-13) = -1", function() {
            var test = controller.computeHW(87,33,-13);
            expect(test).to.equal(-1);
        });
        it("Avg of (80,88,93) = 17.400000000000002", function() {
            var test = controller.computeHW(80,88,93);
            expect(test).to.equal(17.400000000000002);
        });
        it("Avg of (64,69,53) = 12.4", function() {
            var test = controller.computeHW(64,69,53);
            expect(test).to.equal(12.4);
        });
        it("Avg of (55,52,49) = 10.4", function() {
            var test = controller.computeHW(55,52,49);
            expect(test).to.equal(10.4);
        });
        it("Avg of (30,44,39) = 7.533333333333333", function() {
            var test = controller.computeHW(30,44,39);
            expect(test).to.equal(7.533333333333333);
        });
        it("Avg of (33,-65,34) = -1", function() {
            var test = controller.computeHW(33,-65,34);
            expect(test).to.equal(-1);
        });
        it("Avg of (27,19,24) = 4.666666666666667", function() {
            var test = controller.computeHW(27,19,24);
            expect(test).to.equal(4.666666666666667);
        });
        it("Avg of (88,79,89) = 17.066666666666666", function() {
            var test = controller.computeHW(88,79,89);
            expect(test).to.equal(17.066666666666666);
        });
        it("Avg of (89,81,76) = 16.400000000000002", function() {
            var test = controller.computeHW(89,81,76);
            expect(test).to.equal(16.400000000000002);
        });
        it("Avg of (91,85,90) = 17.733333333333334", function() {
            var test = controller.computeHW(91,85,90);
            expect(test).to.equal(17.733333333333334);
        });
        it("Avg of (-97,98,91) = -1", function() {
            var test = controller.computeHW(-97,98,91);
            expect(test).to.equal(-1);
        });
        it("Avg of (15,22,19) = 3.733333333333334", function() {
            var test = controller.computeHW(15,22,19);
            expect(test).to.equal(3.733333333333334);
        });
        it("Avg of (14,9,6) = 1.9333333333333333", function() {
            var test = controller.computeHW(14,9,6);
            expect(test).to.equal(1.9333333333333333);
        });
        it("Avg of (11,15,16) = 2.8000000000000003", function() {
            var test = controller.computeHW(11,15,16);
            expect(test).to.equal(2.8000000000000003);
        });
        it("Avg of (99,94,94) = 19.133333333333336", function() {
            var test = controller.computeHW(99,94,94);
            expect(test).to.equal(19.133333333333336);
        });
        it("Avg of (101,153,999) = -1", function() {
            var test = controller.computeHW(101,153,999);
            expect(test).to.equal(-1);
        });
    });
});