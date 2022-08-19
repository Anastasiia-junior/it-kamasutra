import React from 'react';
import Nav from './Nav/Nav';
import Profile from './profile/Profile';
import classes from './main.module.css';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Settings from './Settings/Setting';
import Music from './Music/Music';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';



const Main = (props) => {
    console.log(props);

    return (
        <BrowserRouter>
            <main className={classes.main}>
                <Nav />
                <Routes>
                    <Route path='/profile/Profile/*' 
                        element={<Profile/>} 
                            />

                    <Route path='/Dialogs/Dialogs/*' 
                        element={<Dialogs/>} 
                            />

                    <Route path='/Users/*'
                        element={<UsersContainer/>}
                        />

                    <Route path='/News/News' 
                        element={<News/>} 
                            />

                    <Route path='/Music/Music' 
                        element={<Music/>} 
                            />

                    <Route path='/Settings/Settings' 
                        element={<Settings />} 
                            />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Main;