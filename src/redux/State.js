let store = {
  _state: {

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
    
  },
  getState() {
    return (this._state);
  },
  createMessage(message) {
    let newMessage = {
      id: 7,
      text: message,
    };
  
    this._state.dialogsPage.messagesData.push(newMessage);
  
    this._callSubscriber(store);
  },
  createPosts() {
    let newPost = {
      id: 4, 
      description: this._state.profilePage.newPostText,
      likes: 23
    };
    this._state.profilePage.postsData.push(newPost);

    this._state.profilePage.newPostText = '';
    this._callSubscriber(store);
  },
  updatePostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(store);
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log('state has been changed');
  }

}


window.store = store;
export default store;