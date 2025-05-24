import React from "react";
import { MdDashboard, MdOutlineHealthAndSafety } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaAppStoreIos, FaArtstation, FaCalendarAlt, FaPhone } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
const Sidebar = () => (
    <aside className="sidebar">
        <h2><span className="siderbar_title"> <span className="sidebar_icon"><MdOutlineHealthAndSafety /></span>
            Health</span><span className="siderbar_title1">care.</span></h2>
        <h3>General</h3>
        <ul className="nav-list">
            <li title="Dashboard"><span> <MdDashboard className="dashboard_icon" /></span>Dashboard</li>
            <li title="History"><span> <HiArrowsUpDown className="dashboard_icon" /></span>History</li>
            <li title="Calendar"><span> <FaCalendarAlt className="dashboard_icon" /></span>Calendar</li>
            <li title="Appointments"><span> <FaAppStoreIos className="dashboard_icon" /></span>Appointments</li>
            <li title="Statistics"><span> <FaArtstation className="dashboard_icon" /></span>Statistics</li>
        </ul>
        <h3>Tools</h3>
        <ul className="nav-list">
            <li title="Chat"><span> <BsChatText className="dashboard_icon" /></span>Chat</li>
            <li title="Support"><span><FaPhone className="dashboard_icon" /> </span>Support</li>
        </ul>
        <ul className="nav-list">
            <li title="Setting"><span><IoIosSettings className="dashboard_icon setting_icon" /> </span>Setting</li>
        </ul>
    </aside>
);

export default Sidebar;
