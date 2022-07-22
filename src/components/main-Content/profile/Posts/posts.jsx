import React from 'react';
import classes from './posts.module.css';
import Post from './MyPost/post';

const Posts = () => {
    return (
        <div>
           <Post description='1 post'></Post> 
           <Post description='2 post'></Post>
           <Post description='3 post'></Post>
           <Post description='4 post'></Post>
        </div>
    )
}

export default Posts;