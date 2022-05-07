var expect = require("chai").expect;
const { describe, assert, it } = require("mocha");
var controller = require("../controllers/controller");
var mongoose = require('mongoose');
var Grade = require('../models/grade');
var save = require('../controllers/gradesController').saveGrades;
const app = require('../main.js');
const conn = require('../gradesDB.js');
const request = require('supertest');

describe("Test saveGrades. Function returns -1 if input is out of bounds.", function() {
    describe("Test boundary values of saveGrades", function() {
        it("Grades of (100,100,100,100,100)", (done) => {
            request(app).post('/grade')
                .send({
                    h1 : 100,
                    h2 : 100,
                    h3 : 100,
                    exam1 : 100,
                    exam2 : 100,
                    finalGrade : controller.getFinalGrade(controller.computeHW(this.hw1,this.hw2,this.hw3), controller.computeExams(this.exam1,this.exam2)),
                    letterGrade : controller.getFinalLetterGrade(this.finalGrade),
                })
                .then((res) => {
                    const body = res.body;
                    expect(body).to.contain.property('h1');
                    expect(body).to.contain.property('h2');
                    expect(body).to.contain.property('h3');
                    expect(body).to.contain.property('exam1');
                    expect(body).to.contain.property('exam2');
                    expect(body).to.contain.property('finalGrade');
                    expect(body).to.contain.property('letterGrade');
                    done();
                });
        });
    });
});
