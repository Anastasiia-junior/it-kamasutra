import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src="https://ru-static.z-dn.net/files/d7b/1587074371436b94b990fee3bd004e58.png" alt="avatar" />
            <div>{props.description}</div>
            <button>like</button>
        </div>
    )
}

export default Post;