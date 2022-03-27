import React from 'react';

import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import UsersDialogs from './usersDialogs/UsersDialogs';



const Dialogs = (props) => {

    return (
        <div className={classes.content}>
            <UsersDialogs dialogsData={props.dialogsData}/>
            <Messages messagesData={props.messagesData}/>
        </div>
    )
}

export default Dialogs;