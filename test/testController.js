var expect = require("chai").expect;
const { describe, assert, it } = require("mocha");
var controller = require("../controllers/controller");
var Grade = require('../models/grade');
const mongoose = require('mongoose');
var save = require('../controllers/gradesController').saveGrades;
const app = require("../main");
const request = require("supertest");
const path = require("path");


mongoose.connect('mongodb://localhost/grade');

mongoose.connection.once('open', function() {
    console.log("Connected to grades db");
}).on('error', function(error){
    console.log("Connection error", error);
});

describe("Test saveGrades. Function returns -1 if input is out of bounds.", function() {
    it("Grades of (100,100,100,100,100) saved to db", function(done) {
        request(app).post("/grade").field("hw1","100").field("hw2","100").field("hw3","100").field("exam1","100").field("exam2","100").expect(200).end(function(err,res) {
            if (err) {
                throw err;
            }
            done();
        });
    });
});
