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
    console.log(props);

    return (
        <BrowserRouter>
            <main className={classes.main}>
                <Nav />
                <Routes>
                    <Route path='/profile/Profile/*' 
                        element={<Profile 
                             profilePage={props.state.profilePage}
                             dispatch = {props.dispatch}
                            />} 
                            />

                    <Route path='/Dialogs/Dialogs/*' 
                        element={<Dialogs 
                            dialogsPage = {props.state.dialogsPage}
                            dispatch = {props.dispatch}/>} 
                            />

                    <Route path='/News/News' 
                        element={<News 
                            newsPage = {props.state.newsPage}/>} 
                            />

                    <Route path='/Music/Music' 
                        element={<Music 
                            musicPage = {props.state.musicPage}/>} 
                            />

                    <Route path='/Settings/Settings' 
                        element={<Settings 
                            settingsPage = {props.state.settingsPage}/>} 
                            />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Main;