import React from 'react';
import Stat from './Stat';
import imageHeaderDesktop from '../images/image-header-desktop.jpg';
import imageHeaderMobile from '../images/image-header-mobile.jpg';

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
            {/*<div className="image-container">*/}
            {/*    <img src={imageHeaderDesktop} alt="imageHeader"/>*/}
            {/*</div>*/}
        </div>
    );
};

export default StatPreview;