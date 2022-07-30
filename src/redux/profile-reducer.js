const CREATE_POSTS = 'CREATE-POSTS';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case CREATE_POSTS:

            let newPost = {
                id: 4,
                description: state.newPostText,
                likes: 23
            };
            state.postsData.push(newPost);

            state.newPostText = '';
            return state;

        case UPDATE_POST_TEXT:

            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer; 