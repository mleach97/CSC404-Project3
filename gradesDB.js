const { grades } = require( './controllers/testController' );
const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controllers/controller");

const mongoose = require( 'mongoose' ),
  Test = require( './models/test' );

  mongoose.connect( 'mongodb://localhost/grades' );
mongoose.connection;

Test.remove( {} )
  .exec()
  .then( () => {
    console.log( 'Test data is empty!' );
  } );

var commands = [];

grades.forEach( ( c ) => {
    commands.push( Test.create( {
      HW1: c.hw1,
      HW2: c.hw2,
      HW3: c.hw3,
      Exam1: c.exam1,
      Exam2: c.exam2,
      FinalGrade: getFinalGrade(computeHW(c.hw1, c.hw2, c.hw3), computeExams(c.exam1, c.exam2)),
      FinalLetterGrade: getFinalLetterGrade(getFinalGrade(computeHW(c.hw1, c.hw2, c.hw3), computeExams(c.exam1, c.exam2)))
    } ) );
  } );

  Promise.all( commands )
  .then( r => {
    console.log( JSON.stringify( r ) );
    mongoose.connection.close();
  } )
  .catch( error => {
    console.log( `ERROR: ${error}` );
  } );