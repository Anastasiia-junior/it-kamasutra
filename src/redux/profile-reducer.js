const CREATE_POSTS = 'CREATE-POSTS';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === CREATE_POSTS) {

        let newPost = {
          id: 4,
          description: state.newPostText,
          likes: 23
        };
        state.postsData.push(newPost);
  
        state.newPostText = '';
  
      } else if (action.type === UPDATE_POST_TEXT) {
  
        state.newPostText = action.newText;
      }

      return state;
}

export default profileReducer; 