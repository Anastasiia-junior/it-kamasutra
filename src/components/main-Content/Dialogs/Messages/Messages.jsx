import React from 'react';
import classes from './Messages.module.css';
import Message from './Message/Message';
import CreateMessageContainer from './CreateMessage/CreateMessageContainer';

const Messages = (props) => {

    let messages = props.messagesData;
    let newMessages = messages.map(el => <Message text={el.text} key={el.id}></Message>)

    return (
        <div className={classes.messages}>
            {newMessages}
            <CreateMessageContainer 
            // dispatch={props.dispatch}
            // message={props.message}
            />
        </div>
    )
}

export default Messages;