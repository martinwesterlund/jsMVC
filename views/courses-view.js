class CoursesView {
  _parentElement = document.querySelector(".courses");

  addHandlerRender(subscriber) {
    ["load"].forEach((e) => window.addEventListener(e, subscriber));
  }

  addHandlerClick(subscriber) {
    const courses = this._parentElement.querySelectorAll(".course");
    courses.forEach((course) => {
      course.addEventListener("click", (e) => {
        subscriber(course.id);
      });
    });
  }

  renderCourses(courses) {
    for (let i = 0; i < courses.length; i++) {
      let courseElement = document.createElement("div");
      let courseId = document.createElement("h4");
      let courseHeader = document.createElement("h2");
      let courseDuration = document.createElement("h4");
      courseId.innerHTML = "Id:" + courses[i].id;
      courseHeader.innerHTML = courses[i].title;
      courseDuration.innerHTML = courses[i].duration + "h";
      courseElement.appendChild(courseId);
      courseElement.appendChild(courseHeader);
      courseElement.appendChild(courseDuration);
      courseElement.setAttribute("class", "course");
      courseElement.setAttribute("id", courses[i].id);
      this._parentElement.appendChild(courseElement);
    }
  }
}

export default new CoursesView();
