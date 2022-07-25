import React from 'react';

const CreatePosts = (props) => {

    let textInput = React.createRef();

    function handleClick() {
        let text = textInput.current.value;
        props.createPosts(text);
        textInput.current.value = '';
    }


    return (
        <div>
            <textarea ref={textInput} />

            <input
                type="button"
                value="add a new post"
                onClick={handleClick}
            />
            
        </div>
    )
}

export default CreatePosts;