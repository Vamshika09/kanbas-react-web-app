import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiHelpCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import {
  BsFillCalendar2WeekFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgStudio } from "react-icons/cg";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <HiOutlineInbox className="wd-icon" />,
    History: <AiOutlineClockCircle className="wd-icon" />,
    Studio: <CgStudio className="wd-icon" />,
    Commons: <BsFillArrowRightCircleFill className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ahCyAshjeeV4vRiyexgcIkbwtkQX7YgaYQ&usqp=CAU" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
