'use strict';

const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controller");

let testCases = [];

exports.showTestCases =   ( req, res ) => {
  res.render( 'displayTests', {
    allTestCases: testCases
  } );
};

exports.showTCForm = ( req, res ) => {
  res.render( 'addTest' );
};

exports.addTestCase = ( req, res ) => {
  var tc = {
    hw1: req.body.hw1,
    hw2: req.body.hw2,
    hw3: req.body.hw3,
    exam1: req.body.exam1,
    exam2: req.body.exam2,
    hwGrade: function () {
      return computeHW(tc.hw1, tc.hw2, tc.hw3)
    },
    examGrade: function () {
      return computeExams(tc.exam1, tc.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(tc.hwGrade(), tc.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(tc.finalGrade())
    }
  };
  testCases.push(tc);
  res.render( 'addTest' );
}