class TeachersView {
  _parentElement = document.querySelector(".teachers");

  addHandlerRender(subscriber) {
    ["load"].forEach((e) => window.addEventListener(e, subscriber));
  }

  addHandlerClick(subscriber) {
    const teachers = this._parentElement.querySelectorAll(".teacher");
    teachers.forEach((teacher) => {
      teacher.addEventListener("click", (e) => {
        subscriber(teacher.id);
      });
    });
  }

  renderTeachers(teachers) {
    console.log(teachers);
    for (let i = 0; i < teachers.length; i++) {
      let teacherElement = document.createElement("div");
      let teacherId = document.createElement("h4");
      let teacherHeader = document.createElement("h2");
      let teacherAreas = document.createElement("h4");
      teacherId.innerHTML = "Id:" + teachers[i].id;
      teacherHeader.innerHTML = `${teachers[i].firstName} ${teachers[i].lastName}`;
      teacherAreas.innerHTML = `Teaches in: ${teachers[i].areas}`;
      teacherElement.appendChild(teacherId);
      teacherElement.appendChild(teacherHeader);
      teacherElement.appendChild(teacherAreas);
      teacherElement.setAttribute("class", "teacher");
      teacherElement.setAttribute("id", teachers[i].id);
      this._parentElement.appendChild(teacherElement);
    }
  }
}

export default new TeachersView();
