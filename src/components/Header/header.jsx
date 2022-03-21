import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='http://www.alokatalog.com/Resimler/image/lova-hotel-logo_type_design_11.jpg' width={'100px'} />
        </header>
    )
}

export default Header;