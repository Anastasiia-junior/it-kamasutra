import React from 'react';


const CreatePosts = (props) => {

    let textInput = React.createRef();

    function createPost() {
        props.createPost();
        
    }

    function updatePostText() {
        let newText = textInput.current.value;
        props.updatePostText(newText);
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