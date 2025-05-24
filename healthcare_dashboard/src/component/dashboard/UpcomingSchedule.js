import { FaEye, FaHeart } from "react-icons/fa";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import { FiCheckCircle } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";

const UpcomingSchedule = () => (
    <div className="schedule-section">
        <h2>The Upcoming Schedule   </h2>
        <h4>On Thursday</h4>
        <div className="card">
            <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" icon={<FiCheckCircle />} />
            <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" icon={<FaEye />} />
        </div>
        <h4>On Saturday</h4>
        <div className="card">
            <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" icon={<FaHeart />} />
            <SimpleAppointmentCard title="Neurologist" time="16:00 PM" icon={<FaUserDoctor />} />
        </div>
    </div>
);
export default UpcomingSchedule;

