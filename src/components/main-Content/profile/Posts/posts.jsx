import React from 'react';
import CreatePosts from './createPosts/CreatePosts';
//import classes from './posts.module.css';
import Post from './MyPost/post';

const Posts = (props) => {

    let arrayOfPosts = props.postsData;
    
    let mapOfArrayOfPosts = arrayOfPosts.map((element) => {
    return   ( <Post 
        description={element.description} 
        likes={element.likes}/>)
});

    return (
        <div>
            {mapOfArrayOfPosts}
            <CreatePosts dispatch = {props.dispatch}
                        newPostText={props.newPostText}/>
        </div>
    )
}

export default Posts;