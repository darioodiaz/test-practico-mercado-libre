import React from 'react';

import './header.style.css';

import SearchBox from '../SearchBox/SearchBox.component';
import Logo from '../Logo/Logo.component';

const Header = ({ query, onSearch }) => {
    function onSearchHandler(query) {
        onSearch(query);
    }
    return (
        <header className="app-header" role="banner">
            <div className="app-header-container">
                <Logo />
                <SearchBox query={query} onSearch={onSearchHandler} />
            </div>
        </header>);
};

export default Header;