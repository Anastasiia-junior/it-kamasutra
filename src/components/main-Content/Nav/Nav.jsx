import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <Link to="../profile/Profile" className={classes.visited} >Profile</Link>
                </li>
                <li>
                    <Link to="../Dialogs/Dialogs" className={classes.visited}>Messages</Link>
                </li>
                <li>
                    <Link to="../News/News" className={classes.visited}>News</Link>
                </li>
                <li>
                    <Link to="../Music/Music" className={classes.visited}>Music</Link>
                </li>
                <li>
                    <Link to="../Settings/Settings" className={classes.visited}>Settings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;