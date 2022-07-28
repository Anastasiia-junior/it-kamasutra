import React from 'react';

const CreatePosts = (props) => {

    let textInput = React.createRef();

    function createPost() {
        props.dispatch({type: 'CREATE-POSTS'});
        
    }

    function updatePostText() {
        let newText = textInput.current.value;
        props.dispatch({type: 'UPDATE-POST-TEXT', newText: newText});
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