import React from 'react';
import classes from './Dialog.module.css';
import { Link } from 'react-router-dom';

const Dialog = (props) => {
    let path = `/Dialogs/Dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <Link to={path} className={classes.link}>{props.name}</Link>
        </div>
    )
}

export default Dialog;