import React from 'react';

import './spinner.style.css';

const Spinner = ({ show = false }) => {
    return (show && <div className="spinner--loading"><h2>Cargando...</h2></div>);
};

export default Spinner;