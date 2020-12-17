import * as model from "../models/teachers.js";
import TeachersView from "../views/teachers-view.js";
import TeacherModalView from "../views/teacher-modal-view.js";
import * as TeacherModalController from "../controllers/teacher-modal-controller.js";

// Laddar in alla lärare och skickar iväg dessa till renderingsfunktionen i view (vid start)
const teachersController = function () {
  model.loadTeachers();
  TeachersView.renderTeachers(model.state.teachers);
  TeachersView.addHandlerClick(TeacherDetails);
};

// 
const TeacherDetails = function (id) {
  let teacher = model.state.teachers.find((t) => t.id === id);
  TeacherModalView.render(teacher);
  TeacherModalView.addHandlerCloseTModal(TeacherModalController.closeModal);
};

// Vid start
const init = function () {
  TeachersView.addHandlerRender(teachersController);
};

init();
