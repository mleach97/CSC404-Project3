'use strict';

const mongoose = require( 'mongoose' );

var testSchema = mongoose.Schema( {
  HW1: Number,
  HW2: Number,
  HW3: Number,
  Exam1: Number,
  Exam2: Number,
  FinalGrade: Number,
  FinalLetterGrade: String 
} );

module.exports = mongoose.model( 'Test', testSchema );
