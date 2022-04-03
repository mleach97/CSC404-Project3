'use strict';

const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controller");

const testCases = [];

exports.showTestCases =   ( req, res ) => {
  res.render( 'displayTests', {
    allTestCases: testCases
  } );
};

exports.showTCForm = ( req, res ) => {
  res.render( 'addTest' );
};

exports.addTestCase = () => {
  var tc = {
    hw1: document.getElementById("hw1"),
    hw2: document.getElementById("hw2"),
    hw3: document.getElementById("hw3"),
    exam1: document.getElementById("exam1"),
    exam2: document.getElementById("exam2"),
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  };

  testCases.push(tc);
  document.getElementById("demo").innerHTML = testCases;
  console.log(typeof(tc));
}