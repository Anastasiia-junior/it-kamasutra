const CREATE_POSTS = 'CREATE-POSTS';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

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
        { id: 4, text: ',mvkns svjo dkvj isdvujion ' },
      ],
    
      dialogsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Lena' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Ivan' },
      ],

      message: ''
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

  dispatch(action) {
    if (action.type === 'CREATE-MESSAGE') {
      let newMessage = {
        id: 7,
        text: this._state.dialogsPage.message,
      };
    
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.message = '';
    
      this._callSubscriber(this.getState());

    } else if (action.type === 'UPDATE-TEXT-MESSAGE'){

      this._state.dialogsPage.message = action.newText;
      this._callSubscriber(this.getState());

    } else if ( action.type === CREATE_POSTS) {
      
      let newPost = {
        id: 4, 
        description: this._state.profilePage.newPostText,
        likes: 23
      };
      this._state.profilePage.postsData.push(newPost);
  
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this.getState());

    } else if (action.type === UPDATE_POST_TEXT) {
      
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this.getState());
    }
  },


  subscriber(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log('state has been changed');
  }

}

export const createPostActionCreator = () => {
  return {type: CREATE_POSTS};
};

export const updatePostTextActionCreator = (newText) => {
  return {type: UPDATE_POST_TEXT, newText: newText}
}


export const updateTextMessageActionCreator = (text) => {
  return {
      type: 'UPDATE-TEXT-MESSAGE', 
      newText: text
  };
}

export const sendMessageActionCreator = () => {
  return {type: 'CREATE-MESSAGE'};
}


window.store = store;
export default store;