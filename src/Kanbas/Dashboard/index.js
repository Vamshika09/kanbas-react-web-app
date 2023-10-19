import db from "../Database";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import "./index.css"

function Dashboard() {
  const courses = db.courses;
  return (
    <div class="wd-dashboard-area">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="d-flex flex-row flex-wrap">
          {courses.map((course, index) => (
            <div class="card wd-course-tile-style">
              <img class="card-img-top" src="https://htmlcolorcodes.com/assets/images/colors/hot-pink-color-solid-background-1920x1080.png" class="card-img-top" alt="..." />
              <div class="wd-course-title-description">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                >
                  {course.name}
                </Link>
                <p>
                  {course.name}_{course._id}
                </p>
                <p>
                  2023 fall semester
                </p>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  class="stretched-link"
                >
                  <BiEditAlt/>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;