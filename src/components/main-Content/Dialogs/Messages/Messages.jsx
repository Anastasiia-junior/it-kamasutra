import React from 'react';
import classes from './Messages.module.css';
import Message from './Message/Message';
import CreateMessage from './CreateMessage/CreateMessage';

const Messages = (props) => {

    let messages = props.messagesData;
    let newMessages = messages.map(el => <Message text={el.text}></Message>)

    return (
        <div className={classes.messages}>
            {newMessages}
            <CreateMessage createMessage={props.createMessage}/>
        </div>
    )
}

export default Messages;