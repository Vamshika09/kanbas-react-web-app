import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./Store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState({
    _id: {
      $oid: "0",
    },
    name: "",
    number: "",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "",
    credits: 0,
    description: "",
  });

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id.$oid}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id.$oid === course._id.$oid) {
          return course;
        }
        return c;
      })
    );
    setCourse({
      _id: {
        $oid: "0",
      },
      name: "",
      number: "",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      department: "",
      credits: 0,
      description: "",
    });
  };
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
    setCourse({
      _id: {
        $oid: "0",
      },
      name: "",
      number: "",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      department: "",
      credits: 0,
      description: "",
    });
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(`${URL}/${course._id.$oid}`);
    setCourses(courses.filter((c) => c._id.$oid !== course._id.$oid));
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses" element={<Courses courses={courses} />} />
            <Route
              path="Courses/:courseId/*"
              element={<Courses dbcourses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
