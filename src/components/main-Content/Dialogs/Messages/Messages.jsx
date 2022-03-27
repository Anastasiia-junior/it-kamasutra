import React from 'react';
import classes from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) => {
console.log(props);
    let messages = props.messagesData;
    console.log(messages);
    //debugger;
   let newMessages = messages.map(el => <Message text={el.text}></Message>)

    return (
        <div className={classes.messages}>
            {newMessages}
        </div>
    )
}

export default Messages;