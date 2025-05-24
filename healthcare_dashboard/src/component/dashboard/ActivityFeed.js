const ActivityFeed = () => (
    <div className="activity-feed">
        <div className="activity-feed-header">
            <h3>Activity</h3>
            <p>3 appointments this week</p>
        </div>
        <div className="bar-chart">
            {[
                { day: "Mon", height: "40px" },
                { day: "Tue", height: "80px" },
                { day: "Wed", height: "60px" },
                { day: "Thu", height: "100px" },
                { day: "Fri", height: "50px" },
                { day: "Sat", height: "70px" },
                { day: "Sun", height: "30px" },
            ].map((bar, index) => (
                <div className="bar-item" key={index}>
                    <div className="bar" style={{ height: bar.height }}></div>
                    <span className="label">{bar.day}</span>
                </div>
            ))}
        </div>
    </div>

);

export default ActivityFeed;
