'use strict';

const testCases = [
  {
    hw1: 100,
    hw2: 100,
    hw3: 100,
    exam1: 100,
    exam2: 100,
    hwGrade: function () {
      if(this.hw1 > 100 || this.hw2 > 100 || this.hw3 > 100){//Upper range
          return -1;
      }
      if(this.hw1 < 0 || this.hw2 < 0 || this.hw3 < 0){//Lower range
          return -1;
      }
      var finalHWGrade = (((this.hw1 + this.hw2 + this.hw3)/3)*0.2);
      return finalHWGrade;
    },
    examGrade: function () {
      if(this.exam1 > 100 || this.exam2 > 100){//Upper range
        return -1;
      }
      if(this.exam1 < 0 || this.exam2 < 0){//Upper range
          return -1;
      }
      var finalExamGrade = ((4/5) * (this.exam1 + this.exam2))/2;
      return finalExamGrade;
    },
    finalGrade: function () {
      if(this.hwGrade < 0 || this.examGrade < 0){//Lower bound
        return "ERROR! Invalid grade put in homework or exams.";
      }else if(this.hwGrade > 20 || this.examGrade > 80){//Upper bound
          return "ERROR! Invalid grade put in homework or exams.";
      }
      //Compute final exam grade by adding the two functions together
      var betaExamGrade = this.hwGrade + this.examGrade;
      //The code below checks if the statement can be rounded up
      if(betaExamGrade + 0.5 > Math.floor(betaExamGrade) + 1){
          betaExamGrade = Math.floor(betaExamGrade) + 1;
      }else{
          betaExamGrade = Math.floor(betaExamGrade);
      }
      return betaExamGrade;
    },
    letterGrade: function () {
      switch (true) {
        case (this.finalGrade >= 93):
            return 'A'
        case (this.finalGrade <= 92 && this.finalGrade >= 90):
            return 'A-'
        case (this.finalGrade <= 89 && this.finalGrade >= 87):
            return 'B+'
        case (this.finalGrade <= 86 && this.finalGrade >= 83):
            return 'B'
        case (this.finalGrade <= 82 && this.finalGrade >= 80):
            return 'B-'
        case (this.finalGrade <= 79 && this.finalGrade >= 77):
            return 'C+'
        case (this.finalGrade <= 76 && this.finalGrade >= 73):
            return 'C'
        case (this.finalGrade <= 72 && this.finalGrade >= 70):
            return 'C-'
        case (this.finalGrade <= 69 && this.finalGrade >= 67):
            return 'D+'
        case (this.finalGrade <= 66 && this.finalGrade >= 63):
            return 'D'
        case (this.finalGrade <= 62 && this.finalGrade >= 60):
            return 'D-'
        case (this.finalGrade <= 59):
            return 'F'
        default:
            return "ERROR! Invalid final grade input"
      }
    }
  }
];

exports.showTestCases =   ( req, res ) => {
  res.render( 'displayTests', {
    allTestCases: testCases
  } );
};

exports.showTCForm = ( req, res ) => {
  res.render( 'addTest' );
};