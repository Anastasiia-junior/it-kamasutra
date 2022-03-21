import React from 'react';
import classes from './posts.module.css';
import Post from './MyPost/post';

const Posts = () => {
    return (
        <div>
           <Post></Post>
           <Post></Post>
           <Post></Post>
           <Post></Post>
        </div>
    )
}

export default Posts;