function destroyChildren() {
  table.innerHTML = "";
}

class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement=tableElement;
    this.noGradesElement=noGradesElement;
  }
  updateGrades(grades){
    this.tableElement.gradeTable;
    destroyChildren();
    for (var i=0;i<grades.length;i++){
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if (table.hasChildNodes()!==true){
      noGrades.classList.remove("d-none");
    } else {
      noGrades.classList.add("d-none");
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade=deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var row = document.createElement("tr");
    var name = document.createElement("td");
    name.textContent = data.name;
    var course = document.createElement("td");
    course.textContent = data.course;
    var grade = document.createElement("td");
    grade.setAttribute("class", "grade");
    grade.textContent = data.grade;
    var deleteEl = document.createElement("td");
    var deleteButton = document.createElement("button");
    var deleteClickHandler = deleteButton.addEventListener("click", function(){
      deleteGrade(data.id);
    });
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("btn", "btn-danger")
    deleteEl.appendChild(deleteButton);
    row.appendChild(name);
    row.appendChild(course);
    row.appendChild(grade);
    row.appendChild(deleteEl);
    table.appendChild(row);
    return row;
  }
}
