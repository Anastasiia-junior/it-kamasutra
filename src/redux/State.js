let renderEntireTree = () => {
  console.log('state has been changed');
}

let state = {

  profilePage: {
    postsData: [
      {id: 1, description: 'jkdhcihsdic hi jdhvihd', likes: 15},
      {id: 2, description: 'fbdfbfb', likes: 5},
      {id: 3, description: 'lkhduisd dhvuih kjhuihcu hnidhv  jvh schn hduihduv ', likes: 10}

    ],
    newPostText: ''
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


window.state = state;

export const createMessage = (message) => {
  let newMessage = {
    id: 7,
    text: message,
  };

  state.dialogsPage.messagesData.push(newMessage);

  renderEntireTree(state);
};

export const createPosts = () => {
  let newPost = {
    id: 4, 
    description: state.profilePage.newPostText,
    likes: 23
  };

  state.profilePage.postsData.push(newPost);

  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export const updatePostText = (text) => {
  state.profilePage.newPostText = text;
  renderEntireTree(state);
}

export const subscriber = (observer) => {
  renderEntireTree = observer;
}

export default state;