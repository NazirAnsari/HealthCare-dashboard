import React from 'react'
import anatomy from '../../images/anatomy.jpg'
import { PiBoneBold } from "react-icons/pi";
import { FaLungs, FaTooth } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";

const AnatomySectionLeft = () => {
    return (
        <div className='anatomy-left-section'>
            <div>
                <img src={anatomy} alt="Anatomy" width={200} />
                <div className="label_heart">❤️ Healthy Heart</div>
                <div className="label_leg"><GiLeg /> Healthy Leg</div>
            </div>
            <div>
                <div className='anatomy-left-section-border'>
                    <div className='header-anatomy'>
                        <FaLungs className='size-antamoy-label' />
                        <p>Lungs</p>
                    </div>
                    <p>Date: 26 Oct 2024</p>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `75%`, backgroundColor: "#e7c88f" }}
                        ></div>
                    </div>
                </div>
                <div className='anatomy-left-section-border'>
                    <div className='header-anatomy'>
                        <FaTooth className='size-antamoy-label' /> Teeth
                    </div>
                    <p>Date: 26 Oct 2024</p>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `85%`, backgroundColor: "#7ab57a" }}
                        ></div>
                    </div>

                </div>
                <div className='anatomy-left-section-border'>
                    <div className='header-anatomy'>
                        <PiBoneBold className='size-antamoy-label' /> Bone
                    </div>
                    <p>Date: 26 Oct 2024</p>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `65%`, backgroundColor: "#afaf50" }}
                        ></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnatomySectionLeft
