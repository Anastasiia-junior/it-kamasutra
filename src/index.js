import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let renderEntireTree = (props) => {
  console.log(props);

    ReactDOM.render(
        <React.StrictMode>
          <App 
            state = {props.getState()} 
            createMessage={props.createMessage.bind(props)}
            createPosts={props.createPosts.bind(props)}
            updatePostText={props.updatePostText.bind(props)}
            />
        </React.StrictMode>,
        document.getElementById('root')
      );
};


renderEntireTree(store);

store.subscriber(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
