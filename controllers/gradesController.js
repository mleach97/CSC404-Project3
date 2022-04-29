'use strict';

const Grade = require( '../models/grade' );
const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controller");

exports.getAllGrades = (req, res ) => {
    Grade.find( {} )
        .exec()
        .then( ( grades ) => {
            res.render( 'grades', {
                grades: grades
            });
        })
        .catch( (error) => {
            console.log( error.message );
            return[];
        })
        .then( () => {
            console.log( 'promise complete' );
        });
};

exports.getGradePage = ( req, res ) => {
    res.render( 'addTest' );
};

exports.showGradeDB = (req, res ) => {
    res.render('grades', {
        allTestCases: Grade.getAllGrades
    });
};

exports.saveGrades = ( req, res ) => {
    let newGrades = new Grade({
        hw1: req.body.hw1,
        hw2: req.body.hw2,
        hw3: req.body.hw3,
        exam1: req.body.exam1,
        exam2: req.body.exam2,
        //FinalGrade: getFinalGrade(computeHW(this.hw1, this.hw2, this.hw3), computeExams(this.exam1, this.exam2))
        //FinalLetterGrade: req.body.FinalLetterGrade
    });

    newGrades.save()
        .then( result => {
            res.render( 'thanks' );
        } )
        .catch(error => {
            res.send( error );
        });
};