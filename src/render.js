import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createMessage} from './redux/State';


let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
          <App messagesData={props.messagesData} dialogsData={props.dialogsData} createMessage={createMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
};

export default renderEntireTree;