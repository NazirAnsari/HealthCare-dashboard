const SimpleAppointmentCard = ({ title, time, icon }) => {
    return (
        <div className="appointment-card">
            <div className="appointment-card-header">
                <div className="title">{title}</div>
                <div className="icon">{icon}</div>
            </div>
            <p className="time">{time}</p>
        </div>
    );
};

export default SimpleAppointmentCard;