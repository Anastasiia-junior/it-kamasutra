const CREATE_POSTS = 'CREATE-POSTS';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    postsData: [
      { id: 1, description: 'jkdhcihsdic hi jdhvihd', likes: 15 },
      { id: 2, description: 'fbdfbfb', likes: 5 },
      { id: 3, description: 'lkhduisd dhvuih kjhuihcu hnidhv  jvh schn hduihduv ', likes: 10 }

    ],
    newPostText: ''
  }

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_POSTS:

            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 4,
                    description: state.newPostText,
                    likes: 23
                }],
                newPostText: ''
            };

        case UPDATE_POST_TEXT:

            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export default profileReducer; 