import "./css/SideBar.css";

import {
  FiUsers,
  FiSettings,
  FiPenTool,
  FiCalendar,
  FiActivity,
  FiAirplay,
  FiBell,
} from "react-icons/fi";
import { TbHomeCog, TbTools, TbMathFunction, TbStars } from "react-icons/tb";
import { GrUserWorker, GrWorkshop } from "react-icons/gr";
import { SlGraduation } from "react-icons/sl";
import { NavLink as Link } from "react-router-dom";

interface SideBarProps {
  toggled: boolean;
}

const SideBar = (props: SideBarProps) => {
  return (
    <div id="SideBar" className={props.toggled ? "" : ""}>
      <img
        alt="Brand Logo"
        draggable="false"
        id="acadbrand"
        // src={PlayIcon}
        style={{ width: "135px", height: "130px", objectFit: "contain" }}
        onContextMenu={(event) => {
          event.preventDefault();
        }}
      />
      <Link
        draggable="false"
        className={({ isActive }) =>
          isActive ? "nav-item navactive" : "nav-item"
        }
        to="/"
      >
        <TbHomeCog />
        <span>Home</span>
      </Link>
      <Link
        draggable="false"
        className={({ isActive }) =>
          isActive ? "nav-item navactive" : "nav-item"
        }
        to="/students"
      >
        <SlGraduation />
        <span>Students</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/teachers">
        <GrWorkshop opacity={0.7} />
        <span>Teachers</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/departments">
        <FiAirplay />
        <span>Deptmnts</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/subjects">
        <TbMathFunction />
        <span>Subjects</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/nonstaffs">
        <GrUserWorker opacity={0.7} />
        <span>Non-Staff</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/events">
        <FiActivity />
        <span>Events</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/calender">
        <FiCalendar />
        <span>Calender</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/exams">
        <FiPenTool />
        <span>Exams</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/feeds">
        <FiBell />
        <span>Feeds</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/assistant">
        <TbTools />
        <span>Assistnt</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/extras">
        <TbStars opacity={0.7} />
        <span>Extras</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/Account">
        <FiUsers />
        <span>Account</span>
      </Link>
      <Link draggable="false" className="nav-item" to="/settings">
        <FiSettings />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export { SideBar };
