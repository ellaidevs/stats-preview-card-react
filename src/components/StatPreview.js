import React from 'react';
import Stat from "./Stat";

const StatPreview = () => {
    return (
        <div className="card-container">
            <div className="card-desc-container">
                <h1 className="main-heading">Get your <span className="text-accent">insights</span> that help your
                    business grow.
                </h1>
                <p className="card-desc">
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer
                    experience, and overall efficiency.
                </p>
                <div className="stat">
                    <Stat header={"10k+"} desc={"COMPANIES"}/>
                    <Stat header={"314"} desc={"TEMPLATES"}/>
                    <Stat header={"12M+"} desc={"QUERIES"}/>
                </div>
            </div>
        </div>
    );
};

export default StatPreview;