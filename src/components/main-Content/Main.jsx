import React from 'react';
import Nav from './Nav/Nav';
import Profile from './profile/Profile';
import classes from './main.module.css';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Settings from './Settings/Setting';
import Music from './Music/Music';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <BrowserRouter>
            <main className={classes.main}>
                <Nav />
                <Routes>
                    <Route path='/profile/Profile.jsx' element={<Profile />} />
                    <Route path='/Dialogs/Dialogs.jsx' element={<Dialogs />} />
                    <Route path='/News/News.jsx' element={<News />} />
                    <Route path='/Music/Music.jsx' element={<Music />} />
                    <Route path='/Settings/Settings.jsx' element={<Settings />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Main;