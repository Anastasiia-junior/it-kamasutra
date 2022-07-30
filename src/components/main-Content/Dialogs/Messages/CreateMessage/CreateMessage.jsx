import React from 'react';
//import classes from './.module.css';
import {updateTextMessageActionCreator, sendMessageActionCreator } from '../../../../../redux/State'


const CreateMessage = (props) => {

    let textInput = React.createRef();

    function updateTextInput() {
        let text = textInput.current.value; 
        props.dispatch(updateTextMessageActionCreator(text));
    }

    function sendMessage() {
        props.dispatch(sendMessageActionCreator());
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