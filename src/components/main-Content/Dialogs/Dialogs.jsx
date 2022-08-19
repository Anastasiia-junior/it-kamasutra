import React from 'react';

import classes from './Dialogs.module.css';
import MessagesContainer from './Messages/Messages-container';
import UsersDialogsContainer from './usersDialogs/UsersDialogContainer';




const Dialogs = (props) => {

    return (  
        <div className={classes.content}>
            <UsersDialogsContainer />
            <MessagesContainer  />
        </div>
    )
}

export default Dialogs;