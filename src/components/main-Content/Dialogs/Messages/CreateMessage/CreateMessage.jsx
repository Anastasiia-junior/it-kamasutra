import React from 'react';
//import classes from './.module.css';



const CreateMessage = (props) => {

    let textInput = React.createRef();

    function updateTextInput() {
        let text = textInput.current.value; 
        props.updateTextInput(text);
    }

    function sendMessage() {
        props.sendMessage();
    }

    return (
        <div>
            <textarea ref={textInput} 
            value={props.message}
            onChange={updateTextInput}/>

            <input
                type="button"
                value="send message"
                onClick={sendMessage}
            />
        </div>
    );

};

export default CreateMessage;