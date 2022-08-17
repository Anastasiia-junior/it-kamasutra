import CreatePosts from "./CreatePosts";
import { connect } from 'react-redux';
import {createPostActionCreator, updatePostTextActionCreator} from '../../../../../redux/State';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}; 

let mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(createPostActionCreator())
        },
        updatePostText: (newText) => {
            dispatch(updatePostTextActionCreator(newText));
        }
    }
}

const CreatePostsContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePosts);

export default CreatePostsContainer; 