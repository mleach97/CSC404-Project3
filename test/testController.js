var expect = require("chai").expect;
const { describe, assert, it } = require("mocha");
var controller = require("../controllers/controller");
var Grade = require('../models/grade');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/grade');

mongoose.connection.once('open', function() {
    console.log("Connected to grades db");
}).on('error', function(error){
    console.log("Connection error", error);
});

describe("Test saveGrades. Function returns -1 if input is out of bounds.", function() {
    it("Grades of (100,100,100,100,100) saved to db", function(done) {
        var grade = new Grade({
            hw1 : 100,
            hw2 : 100,
            hw3 : 100,
            exam1: 100,
            exam2: 100
        });
        grade.save().then(function() {
            assert(grade.isNew === false);
            done();
        });
    });
});
