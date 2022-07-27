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

export default renderEntireTree;