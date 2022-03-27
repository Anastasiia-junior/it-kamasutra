import React from 'react';
//import classes from './.module.css';


let CreateMessage = (props) => {

    let textInput = React.createRef();

    function handleClick() {
        alert(textInput.current.value);
    }

    return (
        <div>
            <textarea ref={textInput} />

            <input
                type="button"
                value="send message"
                onClick={handleClick}
            />
        </div>
    );

};

export default CreateMessage;