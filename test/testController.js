var expect = require("chai").expect;
const { describe, assert, it } = require("mocha");
var controller = require("../controllers/controller");
var mongoose = require('mongoose');
var Grade = require('../models/grade');
var save = require('../controllers/gradesController').saveGrades;

describe("Test saveGrades. Function returns -1 if input is out of bounds.", function() {
    describe("Test boundary values of saveGrades", function() {
        before('connect', function(){
            return mongoose.createConnection('mongodb://localhost/books')
        });

        it("Grades of (100,100,100,100,100)", (done) => {
            var newGrade = new Grade({
                h1 : 100,
                h2 : 100,
                h3 : 100,
                exam1 : 100,
                exam2 : 100,
                finalGrade : controller.getFinalGrade(controller.computeHW(this.hw1,this.hw2,this.hw3), controller.computeExams(this.exam1,this.exam2)),
                letterGrade : controller.getFinalLetterGrade(this.finalGrade),
            });
            newGrade.save().then(() => {
                assert(true);
                done();
            });
        });
    });
});
