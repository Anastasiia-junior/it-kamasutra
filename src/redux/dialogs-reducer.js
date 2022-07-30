
const CREATE_MESSAGE = 'CREATE-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === CREATE_MESSAGE) {
        let newMessage = {
          id: 7,
          text: state.message,
        };
  
        state.messagesData.push(newMessage);
        state.message = '';
  
      } else if (action.type === UPDATE_TEXT_MESSAGE) {
  
        state.message = action.newText;
  
      }
    return state; 
}

export default dialogsReducer;