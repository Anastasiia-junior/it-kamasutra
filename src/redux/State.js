import renderEntireTree from "../render";

let state = {

  profilePage: {
    postsData: [
      
    ]
  },

  dialogsPage: {
    messagesData: [
      { id: 1, text: 'kljvio' },
      { id: 2, text: 'lkjv dvhiodhv dv' },
      { id: 3, text: 'dv' },
      { id: 1, text: ',mvkns svjo dkvj isdvujion ' },
    ],
  
    dialogsData: [
      { id: 1, name: 'Andrey' },
      { id: 2, name: 'Sasha' },
      { id: 3, name: 'Lena' },
      { id: 4, name: 'Masha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Ivan' },
    ],
  },

  newsPage: {

  },
  musicPage: {

  },
  settingsPage: {

  }
  
};

export let createMessage = (message) => {
  let newMessage = {
    id: 7,
    text: message,
  };

  state.messagesData.push(newMessage);
  renderEntireTree(state);
};

export default state;