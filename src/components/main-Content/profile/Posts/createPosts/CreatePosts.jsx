import React from 'react';
import {createPostActionCreator, updatePostTextActionCreator} from '../../../../../redux/State'


const CreatePosts = (props) => {

    let textInput = React.createRef();

    function createPost() {
        props.dispatch(createPostActionCreator());
        
    }

    function updatePostText() {
        let newText = textInput.current.value;
        props.dispatch(updatePostTextActionCreator(newText));
    }

    return (
        <div>
            <textarea ref={textInput} 
                    onChange={updatePostText}
                    value={props.newPostText}/>

            <input
                type="button"
                value="add a new post"
                onClick={createPost}
            />
            
        </div>
    )
}

export default CreatePosts;