import React from "react";
import "./dashboard.css";
import { IoSearch } from "react-icons/io5";

const Header = () => (
    <header className="header">
        <div className="header-left">
            <div className="search-bar">
                <IoSearch />
                <input type="text" placeholder="Search" />
            </div>
            <span className="notification-icon">🔔</span>
        </div>

        <div className="header-right">
            <div className="profile">
                <span className="user-avatar">👤</span>
                <button className="add-button">+</button>
            </div>
        </div>
    </header>
);

export default Header;
