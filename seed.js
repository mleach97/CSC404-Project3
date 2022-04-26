'use strict';

const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controllers/controller");
const mongoose = require( 'mongoose' ),
  Test = require( './models/test' );

mongoose.connect( 'mongodb://localhost/' );
mongoose.connection;

var tests = [
  {
    HW1: 100,
    HW2: 100,
    HW3: 100,
    exam1: 100,
    exam2: 100,
    FinalGrade: 100,
    FinalLetterGrade: "A"
  }
];

Test.remove( {} )
  .exec()
  .then( () => {
    console.log( 'Test data is empty!' );
  } );

var commands = [];

tests.forEach( ( c ) => {
  commands.push( Test.create( {
    HW1: c.HW1,
    HW2: c.HW2,
    HW3: c.HW3,
    Exam1: c.exam1,
    Exam2: c.exam2,
    FinalGrade: c.FinalGrade,
    FinalLetterGrade: c.FinalLetterGrade
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
