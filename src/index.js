import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let messagesData = [
  {id: 1, text: 'kljvio'},
  {id: 2, text: 'lkjv dvhiodhv dv'},
  {id: 3, text: 'dv'},
  {id: 1, text: ',mvkns svjo dkvj isdvujion '},
];

let dialogsData = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Sasha'},
  {id: 3, name: 'Lena'},
  {id: 4, name: 'Masha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Ivan'},
];

ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
