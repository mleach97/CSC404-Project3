'use strict';

const mongoose = require( 'mongoose' );

var testSchema = mongoose.Schema( {
  hw1: Number,
  hw2: Number,
  hw3: Number,
  exam1: Number,
  exam2: Number,
  finalGrade: Number,
  letterGrade: String 
} );

module.exports = mongoose.model( 'Grade', testSchema );
