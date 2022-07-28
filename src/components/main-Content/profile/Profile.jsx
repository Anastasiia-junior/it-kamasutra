import React from 'react';
import classes from './profile.module.css';
import Posts from './Posts/posts';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.content_banner}>
                <img src='https://kald.secure2.footprint.net/fileadmin/data/seiten/produkte/badewannen/produktbilder/teaser-badewannen_smaller.png' alt='dvd' />
            </div>
            <Posts 
                dispatch={props.dispatch}
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}/>
                
        </div>
    )
}

export default Profile;