import React from 'react';
import classes from './profile.module.css';
import PostsContainer from './Posts/posts-container';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.content_banner}>
                <img src='https://kald.secure2.footprint.net/fileadmin/data/seiten/produkte/badewannen/produktbilder/teaser-badewannen_smaller.png' alt='dvd' />
            </div>
            <PostsContainer/>
                
        </div>
    )
}

export default Profile;