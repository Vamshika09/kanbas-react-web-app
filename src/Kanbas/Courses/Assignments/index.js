import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  AiOutlinePlus,
  AiFillCheckCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div class="mt-3">
      <div class="d-flex justify-content-between">
        <input
          type="text"
          class="form-control w-25 m-1"
          id="search-assignment"
          placeholder="Search of Assignment"
        ></input>
        <div class="d-flex justify-content-around">
          <button type="button" class="btn btn-secondary m-1">
            <i class="fa fa-plus" aria-hidden="true"></i>
            Group
          </button>
          <button type="button" class="btn btn-danger m-1">
            <i class="fa fa-plus" aria-hidden="true"></i>
            Assignment
          </button>
          <button type="button" class="btn btn-secondary m-1">
            <FaEllipsisVertical />
          </button>
        </div>
      </div>
      <hr/>
      <div class="mt-2">
        <div className="list-group">
          <Link
            to="#"
            class="list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between"
          >
            Assignments
            <div className="d-flex column-gap-2 align-items-center">
              <button
                type="button"
                class="btn btn-outline-dark btn-sm rounded-pill"
              >
                40% of Total
              </button>
              <AiOutlinePlus />
              <FaEllipsisVertical />
            </div>
          </Link>
          {courseAssignments.map((assignment) => (
            <div class="list-group-item list-group-item-action d-flex justify-content-between">
              <div class="d-flex column-gap-2 align-items-center">
                <AiOutlineFileText />
                <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="text-decoration-none"
                >
                  {assignment.title}
                </Link>
              </div>
              <div className="d-flex column-gap-2 align-items-center">
                <AiFillCheckCircle />
                <FaEllipsisVertical />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
