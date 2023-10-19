import React from "react";
import {Link} from "react-router-dom";

function CourseStatus() {
  return (
    <div>
      <div class="wd-course-status-buttons">
        <ul class="wd-flex-column-container row-gap-2 p-0">
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-file-o" aria-hidden="true"></i>
            Importing Existing Content
          </button>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-file-o" aria-hidden="true"></i>
            Importing from Commons
          </button>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-home" aria-hidden="true"></i>
            Choose Home Page
          </button>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-ban" aria-hidden="true"></i>
            View Course Steam
          </button>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-bullhorn" aria-hidden="true"></i>
            New Announcement
          </button>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-signal" aria-hidden="true"></i>
            New Analytics
          </button>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
            View Course Notifications
          </button>
        </ul>
        <div>
          <h6>
            <strong>To Do</strong>
          </h6>
          <hr />
          <div>
            <Link to="#" class="text-danger">
              <strong>Grade A1 - ENV + HTML</strong>
            </Link>
            <p>
              <small>100 points | Sept 18 at 15:59pm</small>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CourseStatus;
