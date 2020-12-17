// import { signUp } from "../controllers/course-modal-controller";

class CourseModalView {
  _parentElement = document.querySelector("#course-modal");
  _modalId = this._parentElement.querySelector("#modal-id");
  _modalHeader = this._parentElement.querySelector("#modal-header");
  _modalDescription = this._parentElement.querySelector("#modal-description");
  _modalDuration = this._parentElement.querySelector("#modal-duration");
  _modalStudents = this._parentElement.querySelector("#modal-students");
  _close = this._parentElement.querySelector("#close");
  _signUp = this._parentElement.querySelector("#signUp");
  _nameInput = this._parentElement.querySelector("#nameInput");
  _id = null;

  addHandlerCloseModal(subscriber) {
    this._close.addEventListener("click", () => subscriber());
  }

  //Testing
  addHandlerSignUp(subscriber) {
    this._signUp.addEventListener("click", () => {
      subscriber(this._id, this._nameInput.value);
      this.clearFields()
    });
  }

  render(course) {
    this._id = course.id
    this._modalId.innerHTML = "Id:" + course.id;
    this._modalHeader.innerHTML = course.title;
    this._modalDescription.innerHTML = course.description;
    this._modalDuration.innerHTML = "Duration: " + course.duration + "h";
    this._modalStudents.innerHTML = "Students: " + course.students;
    this._parentElement.classList.remove("hidden");
  }
  clearFields(){
    this._nameInput.value = ''
  }
  closeModal() {
    this._parentElement.classList.add("hidden");
  }
}

export default new CourseModalView();
