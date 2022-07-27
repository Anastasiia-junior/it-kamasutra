import React from 'react';

const CreatePosts = (props) => {

    let textInput = React.createRef();

    function handleClick() {
        let text = textInput.current.value;
        props.createPosts(text);
        
    }

    function onChangeClick() {
        let newText = textInput.current.value;
        props.updatePostText(newText);
    }

    return (
        <div>
            <textarea ref={textInput} 
                    onChange={onChangeClick}
                    value={props.newPostText}/>

            <input
                type="button"
                value="add a new post"
                onClick={handleClick}
            />
            
        </div>
    )
}

export default CreatePosts;