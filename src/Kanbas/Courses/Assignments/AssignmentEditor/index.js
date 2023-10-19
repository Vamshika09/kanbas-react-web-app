import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {
  AiOutlinePlus,
  AiFillCheckCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div class="wd-assignment-edit-screen d-flex flex-column ml-3">
      <div class="d-flex flex-row justify-content-end align-items-center">
        <Link to="#">
          <AiFillCheckCircle />
          Published
        </Link>
        <button type="button" class="btn btn-secondary m-2">
          <FaEllipsisVertical />
        </button>
      </div>
      <hr />
      <form class="wd-edit-assignment-form">
        <div class="form-group">
          <label for="assignmentName">Assignment Name</label>
          <input value={assignment.title} className="form-control mb-2" />
          <textarea class="wd-container-for-input">
            Assignment description
          </textarea>
          <div class="custom-container container">
            <div class="row row-align">
              <div class="col col-align">
                <label for="points">Points</label>
              </div>
              <div class="col col-align">
                <input
                  type="text"
                  class="form-control"
                  id="points"
                  value="100"
                />
              </div>
            </div>
            <div class="row row-align">
              <div class="col col-align">
                <label for="assignmentGroup">Assignment Group</label>
              </div>
              <div class="col col-align">
                <select id="assignmentGroup" class="form-control">
                  <option>Assignments</option>
                </select>
              </div>
            </div>
            <div class="row row-align">
              <div class="col col-align">
                <label for="displayGradeAs">Display Grade as</label>
              </div>
              <div class="col col-align">
                <select id="displayGradeAs" class="form-control">
                  <option>Percentage</option>
                </select>
              </div>
            </div>
            <div class="row row-align">
              <div class="col col-align "></div>
              <div class="col form-check align-self-center  mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="assignmentCount"
                />
                <label class="form-check-label" for="assignmentCount">
                  Do not count this assignment to final grade
                </label>
              </div>
            </div>
            <div class="row row-align">
              <div class="col col-align">Submission Type</div>
              <div class="col border border-secondary bg-white wd-container-for-input d-flex flex-column justify-content-around">
                <select id="SubmissionType" class="form-control">
                  <option>Online</option>
                </select>
                <label class="form-check-label">
                  <strong> Online Entry Options </strong>{" "}
                </label>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="textEntry"
                    checked
                  />
                  <label class="form-check-label" for="textEntry">
                    {" "}
                    Text Entry{" "}
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="websiteUrl"
                    checked
                  />
                  <label class="form-check-label" for="websiteUrl">
                    Website Url{" "}
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="mediaRecordings"
                    checked
                  />
                  <label class="form-check-label" for="mediaRecordings">
                    Media Recordings{" "}
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="fileUploads"
                    checked
                  />
                  <label class="form-check-label" for="fileUploads">
                    File Uploads{" "}
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="studentAnnotations"
                    checked
                  />
                  <label class="form-check-label" for="studentAnnotations">
                    Student Annotations
                  </label>
                </div>
              </div>
            </div>
            <div class="row row-align">
              <div class="col col-align">Assign</div>
              <div class="col border border-secondary bg-white wd-container-for-input d-flex flex-column justify-content-around">
                <label class="form-check-label">
                  <strong> Assign To </strong>{" "}
                </label>
                <select id="assignType" class="form-control">
                  <option>Everyone</option>
                </select>
                <label class="form-check-label" for="dueDate">
                  <strong> Due </strong>{" "}
                </label>
                <input type="date" class="form-control" id="dueDate" />
                <div class="d-flex flex-row justify-content-between">
                  <div>
                    <label class="form-check-label" for="availableFrom">
                      <strong> Available from </strong>{" "}
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="availableFrom"
                    />
                  </div>
                  <div>
                    <label class="form-check-label" for="untilDate">
                      <strong> Until </strong>{" "}
                    </label>
                    <input type="date" class="form-control" id="untilDate" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-align">
              <div class="col"></div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-secondary wd-add-button w-100"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex flex-row justify-content-between">
            <div class="col form-check align-self-center">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="assignmentCount"
              />
              <label class="form-check-label" for="assignmentCount">
                Notify that this content has changed
              </label>
            </div>
            <div className="d-flex column-gap-2">
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger"
              >
                Cancel
              </Link>
              <button onClick={handleSave} className="btn btn-success me-2">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AssignmentEditor;
