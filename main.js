var noGrades = document.getElementById("noGrades");
var header = document.getElementById("header");
var pageHeader= new PageHeader(header)
var table = document.getElementById("grade-table");
var gradeTable = new GradeTable(table, noGrades);
var formArr = document.querySelector("form");
var gradeForm = new GradeForm(formArr);
var getGrades = new App(gradeTable, pageHeader, gradeForm);
getGrades.start();
