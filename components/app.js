class App{
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var scoreElements = document.querySelectorAll(".grade");
    console.log(scoreElements);
    var average = 0;
    for (var i = 0; i < scoreElements.length; i++) {
    var numerals = parseInt(scoreElements[i].textContent);
    average += numerals;
  }
    average = (average / grades.length);
    this.pageHeader.updateAverage(average);
}
  constructor(gradeTable, pageHeader){
    this.handleGetGradesError=this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess=this.handleGetGradesSuccess.bind(this);
    this.gradeTable=gradeTable;
    this.pageHeader=pageHeader;
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
  start(){
    this.getGrades();
  }
}
