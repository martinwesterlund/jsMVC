class CourseModalView {
  _parentElement = document.querySelector("#course-modal");
  _modalId = this._parentElement.querySelector("#modal-id");
  _modalHeader = this._parentElement.querySelector("#modal-header");
  _modalDescription = this._parentElement.querySelector("#modal-description");
  _modalDuration = this._parentElement.querySelector("#modal-duration");
  _close = this._parentElement.querySelector("#close");

  addHandlerCloseModal(subscriber) {
    this._close.addEventListener("click", () => subscriber());
  }

  render(course) {
    this._modalId.innerHTML = "Id:" + course.id;
    this._modalHeader.innerHTML = course.title;
    this._modalDescription.innerHTML = course.description;
    this._modalDuration.innerHTML = "Duration: " + course.duration + "h";
    this._parentElement.classList.remove("hidden");
  }

  closeModal() {
    this._parentElement.classList.add("hidden");
  }
}

export default new CourseModalView();
