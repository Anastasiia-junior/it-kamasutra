import React from 'react';
import Nav from './Nav/Nav';
import Profile from './profile/Profile';
import classes from'./main.module.css';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Settings from './Settings/Setting';
import Music from './Music/Music';

const Main = () => {
    return (
        <main className={classes.main}>
            <Nav/>
            <Profile/>
            <Dialogs></Dialogs>
            <News></News>
            <Music></Music>
            <Settings></Settings>
        </main>
    )
}

export default Main;