import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div class="wd-dashboard-area">
      <h1>Dashboard</h1>
      <div class="form-group m-4">
        <label for="addCourse">Add a course</label>
        <input
          value={course.name}
          className="form-control m-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control m-2"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control m-2"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control m-2"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <div class="form-group mt-2">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={updateCourse}
          >
            Update
          </button>
          <button
            type="button"
            class="btn btn-primary ms-2"
            onClick={addNewCourse}
          >
            Add
          </button>
        </div>
      </div>
      <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <div class="card wd-course-tile-style">
            <img
              class="card-img-top"
              src="https://htmlcolorcodes.com/assets/images/colors/hot-pink-color-solid-background-1920x1080.png"
              className="card-img-top"
              alt="..."
            />
            <div class="wd-course-title-description">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                {course.name}
              </Link>
              <p>
                {course.name}_{course._id}
              </p>
              <p>2023 fall semester</p>
              <div class="d-flex flex-row justify-content-between align-items-baseline m-2">
                <BiEditAlt />
                <div class="d-flex flex-row justify-content-around">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn btn-outline-primary ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
