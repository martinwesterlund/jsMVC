class TeacherModalView {
    _parentElement = document.querySelector("#teacher-modal");
    _tmodalId = this._parentElement.querySelector("#tmodal-id");
    _tmodalName = this._parentElement.querySelector("#tmodal-name");
    _tmodalEmail = this._parentElement.querySelector("#tmodal-email");
    _tmodalAreas = this._parentElement.querySelector("#tmodal-areas");
    _tclose = this._parentElement.querySelector("#tclose");
  
    addHandlerCloseTModal(subscriber) {
      this._tclose.addEventListener("click", () => subscriber());
    }
  
    render(teacher) {
      this._tmodalId.innerHTML = "Id:" + teacher.id;
      this._tmodalName.innerHTML = teacher.firstName + ' ' + teacher.lastName;
      this._tmodalEmail.innerHTML = teacher.email;
      this._tmodalAreas.innerHTML = "Teaches in: " + teacher.areas;
      this._parentElement.classList.remove("hidden");
    }
  
    closeModal() {
      this._parentElement.classList.add("hidden");
    }
  }
  
  export default new TeacherModalView();