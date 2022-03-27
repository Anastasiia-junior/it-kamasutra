import React from 'react';
//import classes from './Dialog.module.css';
import Dialog from './Dialog/Dialog';


const UsersDialogs = (props) => {
   

    let usersDialogsArray = props.dialogsData;
    
    let newDialogsArray = usersDialogsArray.map( el => <Dialog name={el.name} id={el.id}></Dialog>);

   return (       
       <div>
           {newDialogsArray}
       </div>
       )
}; 

export default UsersDialogs; 