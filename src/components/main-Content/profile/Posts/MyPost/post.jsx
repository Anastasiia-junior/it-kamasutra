import React from 'react';
import classes from './post.module.css';

const Post = () => {
    return (
        <div className={classes.post}>
            <img src="https://ru-static.z-dn.net/files/d7b/1587074371436b94b990fee3bd004e58.png" alt="avatar" />
            <div>Description</div>
            <button>like</button>
        </div>
    )
}

export default Post;