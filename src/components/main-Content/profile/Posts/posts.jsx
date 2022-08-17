import React from 'react';
import CreatePostsContainer from './createPosts/create-posts-container';
// import CreatePosts from './createPosts/CreatePosts';
//import classes from './posts.module.css';
import Post from './MyPost/post';

const Posts = (props) => {

    let arrayOfPosts = props.postsData;
    
    let mapOfArrayOfPosts = arrayOfPosts.map((element) => {
    return   ( <Post 
        description={element.description} 
        likes={element.likes}
        key={element.id}
        />)
});

    return (
        <div>
            {mapOfArrayOfPosts}
            <CreatePostsContainer />
        </div>
    )
}

export default Posts;