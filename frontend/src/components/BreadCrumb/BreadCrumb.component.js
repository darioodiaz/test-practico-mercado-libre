import React from 'react';

import './breadCrumb.style.css';

const BreadCrumb = ({ path = [] }) => {
    return (
        <ul className="app-breadcrumb">
            {
                path.forEach((element) => <li>{element}</li>)
            }
        </ul>);
};

export default BreadCrumb;