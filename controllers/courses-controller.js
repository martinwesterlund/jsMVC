import * as model from '../models/courses.js';
import CoursesView from '../views/courses-view.js';
import CourseModalView from '../views/course-modal-view.js';
import * as CourseModalController from '../controllers/course-modal-controller.js';

const coursesController =  function() {

  // 1. Load courses.
  model.loadCourses();
  // 2. Rendering the courses list.
  CoursesView.renderCourses(model.state.courses);
  // 3. Connect to the views publisher.
  CoursesView.addHandlerClick(CoursesDetails);
};

const CoursesDetails = function(id){
  let course = model.state.courses.find(c => c.id === id)
  CourseModalView.render(course)
  CourseModalView.addHandlerCloseModal(CourseModalController.closeModal);

}
const init = function() {
  CoursesView.addHandlerRender(coursesController);  
};

init();