import React from "react";
import AnatomySection from "./dashboard/AnatomySection";
import UpcomingSchedule from "./dashboard/UpcomingSchedule";
import CalendarView from "./dashboard/CalenderView";
import Header from "./Header";

const DashboardMainContent = () => (
    <>
        <Header />
        <main className="dashboard-content">
            <AnatomySection />
            <div className="rightcontainter">
                <CalendarView />
                <UpcomingSchedule />
            </div>
        </main>
    </>
);

export default DashboardMainContent;