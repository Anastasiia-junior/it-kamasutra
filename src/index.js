import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscriber } from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createMessage, createPosts, updatePostText} from './redux/State';



let renderEntireTree = (props) => {
  console.log(props);
    ReactDOM.render(
        <React.StrictMode>
          <App 
            state = {props} 
            createMessage={createMessage}
            createPosts={createPosts}
            updatePostText={updatePostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
      );
};


renderEntireTree(state);

subscriber(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
