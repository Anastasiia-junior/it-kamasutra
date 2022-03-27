import React from 'react';
import Nav from './Nav/Nav';
import Profile from './profile/Profile';
import classes from './main.module.css';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Settings from './Settings/Setting';
import Music from './Music/Music';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const Main = (props) => {
   

    return (
        <BrowserRouter>
            <main className={classes.main}>
                <Nav />
                <Routes>
                    <Route path='/profile/Profile/*' element={<Profile />} />
                    <Route path='/Dialogs/Dialogs/*' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
                    <Route path='/News/News' element={<News />} />
                    <Route path='/Music/Music' element={<Music />} />
                    <Route path='/Settings/Settings' element={<Settings />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Main;