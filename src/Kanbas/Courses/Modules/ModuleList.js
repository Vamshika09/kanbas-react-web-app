import React from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiFillCheckCircle,AiOutlinePlus } from "react-icons/ai";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div class="wd-module-list">
      <div class="wd-buttons-section justify-content-end">
        <button type="button" class="btn btn-secondary btn-sm">
          Collapse All
        </button>
        <button type="button" class="btn btn-secondary btn-sm">
          View Progress
        </button>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Publish All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Publish All</Dropdown.Item>
            <Dropdown.Item href="#">
              Publish All Items and Modules
            </Dropdown.Item>
            <Dropdown.Item href="#">Unpublish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button type="button" class="btn btn-danger btn-sm">
          <i class="fa fa-plus" aria-hidden="true"></i>
          Module
        </button>
        <button type="button" class="btn btn-secondary btn-sm">
          <FaEllipsisVertical />
        </button>
      </div>
      <hr />
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ul class="list-group mb-3">
              <li
                key={index}
                class="list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between"
              >
                {module.name}
                <div class="d-flex justify-content-between column-gap-2">
                  <AiFillCheckCircle />
                  <AiOutlinePlus />
                  <FaEllipsisVertical />
                </div>
              </li>
              <li
                key={index}
                class="list-group-item list-group-item-action px-5"
              >
                <p>{module.name}</p>
                <small>{module.description}</small>
              </li>
            </ul>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
