import React from 'react';
//import classes from './.module.css';


const CreateMessage = (props) => {

    let textInput = React.createRef();

    function handleClick() {
        let text = textInput.current.value;
        props.createMessage(text);
        textInput.current.value = '';
    }

    return (
        <div>
            <textarea ref={textInput} />

            <input
                type="button"
                value="send message"
                onClick={handleClick}
            />
        </div>
    );

};

export default CreateMessage;