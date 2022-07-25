import React from 'react';

import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import UsersDialogs from './usersDialogs/UsersDialogs';



const Dialogs = (props) => {

    return (  
        <div className={classes.content}>
            <UsersDialogs 
                dialogsData={props.dialogsPage.dialogsData}/>
            <Messages 
                messagesData={props.dialogsPage.messagesData} 
                createMessage={props.createMessage}/>
        </div>
    )
}

export default Dialogs;