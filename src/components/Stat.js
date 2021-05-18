import React from 'react';
import PropTypes from 'prop-types';

const Stat = props => {
    return (
        <div className="stat-container">
            <h1 className="stat-header">{props.header}</h1>
            <p className="stat-desc">{props.desc}</p>
        </div>
    );
};

Stat.propTypes = {

};

export default Stat;