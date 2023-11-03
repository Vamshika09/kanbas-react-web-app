import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

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
      <div class="form-group m-2 mb-4">
        <label for="moduleName">Add a new module</label>
        <input
          value={module.name}
          id="moduleName"
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
          className="form-control mb-2"
          type="next"
        />
        <label for="moduleDescription">Add module's description</label>
        <textarea
          class="form-control"
          value={module.description}
          id="moduleDescription"
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <button
          type="button"
          class="btn btn-primary m-2"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          type="button"
          class="btn btn-primary m-2"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
      </div>
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
                <div className="d-flex justify-content-between align-items-baseline">
                  <div>
                    <p>{module.name}</p>
                    <small>{module.description}</small>
                  </div>
                  <div class="d-flex flex-row justify-content-around">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm m-2"
                      onClick={() => dispatch(deleteModule(module._id))}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary  btn-sm m-2"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
