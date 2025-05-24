import React from "react";
import "./CalenderView.css";
import { FaTooth } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

const CalendarView = () => {
    return (
        <>

            <div className="calendar-view">
                <h3>October 2021</h3>
                <div className="calendar-grid">
                    {/* Static weekdays header */}
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                        <div key={i} className="day-header">{day}</div>
                    ))}

                    {/* Static day cells with hardcoded placement — starts on Friday (Oct 1, 2021) */}
                    {Array(4).fill(null).map((_, i) => <div key={"blank" + i}></div>)}

                    {[...Array(31)].map((_, i) => {
                        const day = i + 1;
                        const appointments = {
                            4: ["09:00", "11:00"],
                            10: ["13:00"],
                            15: ["09:00", "13:00", "15:00"],
                            22: ["11:00"],
                            27: ["09:00", "11:00"],
                        };

                        return (
                            <div key={day} className="calendar-day">
                                <div className="day-number">{day}</div>
                                <div className="appointments">
                                    {appointments[day]?.map((time, idx) => (
                                        <span key={idx} className="appt-time">{time}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="appointments-sec">
                    <div className="appointment-section">
                        <div className='header-appointment-anatomy'>
                            Dentist <FaTooth className='size-antamoy-label' />
                        </div>
                        <p>09:00-11:00</p>
                        <p>Dr. Cameron William</p>
                    </div>
                    <div className="appointment-section">
                        <div className='header-appointment-anatomy'>
                            Physiotherapy Appointment <GiMuscleUp className='size-antamoy-label' />
                        </div>

                        <p>11:00: 12:00 </p>
                        <p>Dr. Kevin</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendarView;
