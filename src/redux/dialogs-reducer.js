
const CREATE_MESSAGE = 'CREATE-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            let newMessage = {
                id: 7,
                text: state.message,
            };

            state.messagesData.push(newMessage);
            state.message = '';
            return state;
        case UPDATE_TEXT_MESSAGE:

            state.message = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;