import React from 'react';

import classes from './Dialogs.module.css';
import MessagesContainer from './Messages/Messages-container';
import UsersDialogsContainer from './usersDialogs/UsersDialogContainer';




const Dialogs = (props) => {

    return (  
        <div className={classes.content}>
            <UsersDialogsContainer
                //dialogsData={props.dialogsPage.dialogsData}
                />
            <MessagesContainer 
               // messagesData={props.dialogsPage.messagesData} 
                // message={props.dialogsPage.message}
                //dispatch = {props.dispatch}
                />
        </div>
    )
}

export default Dialogs;