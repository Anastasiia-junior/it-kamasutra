import React from 'react';
import classes from './nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="../profile/Profile.jsx">Profile</a>
                </li>
                <li>
                    <a href="../Dialogs/Dialogs.jsx">Messages</a>
                </li>
                <li>
                    <a href="../News/News.jsx">News</a>
                </li>
                <li>
                    <a href="../Music/Music.jsx">Music</a>
                </li>
                <li>
                    <a href="../Settings/Settings.jsx">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;