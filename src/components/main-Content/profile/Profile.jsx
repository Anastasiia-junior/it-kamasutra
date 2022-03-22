import React from 'react';
import classes from './profile.module.css';
import Posts from './Posts/posts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content_banner}>
                <img src='https://kald.secure2.footprint.net/fileadmin/data/seiten/produkte/badewannen/produktbilder/teaser-badewannen_smaller.png' alt='dvd' />
            </div>
            <Posts/>
        </div>
    )
}

export default Profile;