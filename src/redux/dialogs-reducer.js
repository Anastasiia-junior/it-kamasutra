
const CREATE_MESSAGE = 'CREATE-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:

        return {
            ...state, 
            messagesData: [...state.messagesData, 
                {
                id: 7,
                text: state.message,
            }],
            message: ''
        }
           
        case UPDATE_TEXT_MESSAGE:

            return {
                ...state,
                message: action.newText
            };
        default:
            return state;
    }
}

export default dialogsReducer;

