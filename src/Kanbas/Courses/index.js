import {
  useParams,
  Route,
  Routes,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../index.css";

function Courses({dbcourses}) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");

  let course = dbcourses.find((course) => course._id === courseId);
  course = course
    ? { ...course }
    : {
        _id: "",
        name: "",
        number: "",
        startDate: "",
        endDate: "",
      };
  return (
    <div class="wd-flex-grow-7 wd-flex-column-container m-3">
      <div class="d-flex flex-row column-gap-3 align-items-baseline">
        <RxHamburgerMenu />
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link
                to={`/Kanbas/Courses/${courseId}`}
                class="text-decoration-none"
              >
                {course.number}
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {screen}
            </li>
          </ol>
        </nav>
      </div>

      <div class="d-flex flex-row">
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "320px",
              top: "50px",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
