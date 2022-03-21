import React from 'react';
import Nav from './Nav/Nav';
import Profile from './profile/Profile';
import classes from'./main.module.css';

const Main = () => {
    return (
        <main className={classes.main}>
            <Nav/>
            <Profile/>
        </main>
    )
}

export default Main;