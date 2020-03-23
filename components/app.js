class App{
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var scoreElements = document.querySelectorAll(".grade");
    var average = 0;
    for (var i = 0; i < scoreElements.length; i++) {
    var numerals = parseInt(scoreElements[i].textContent);
    average += numerals;
  }
    average = (average / grades.length);
    this.pageHeader.updateAverage(average);
}
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError=this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess=this.handleGetGradesSuccess.bind(this);
    this.gradeTable=gradeTable;
    this.pageHeader=pageHeader;
    this.gradeForm=gradeForm;
    this.createGrade=this.createGrade.bind(this);
    this.handleCreateGradeError=this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess=this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade=this.deleteGrade.bind(this);
    this.handleDeleteGradeError=this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess=this.handleDeleteGradeSuccess.bind(this);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {"X-Access-Token": "98x9bLeN"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "98x9bLeN" },
      data: {name, course, grade},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    });
  }
  handleCreateGradeError(error){
    console.error("error: ", error);
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  deleteGrade(id){
  $.ajax({
    method: "DELETE",
    url: "https://sgt.lfzprototypes.com/api/grades/"+id,
    headers: { "X-Access-Token": "98x9bLeN" },
    success: this.handleDeleteGradeSuccess,
    error: this.handleDeleteGradeError,
  })
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
