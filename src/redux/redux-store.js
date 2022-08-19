import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './usersReducer';

// let reducers = combineReducers({
//     profilePage: profileReducer, 
//         dialogsPage: dialogsReducer
// })

export default configureStore({
    reducer: {
        profilePage: profileReducer, 
        dialogsPage: dialogsReducer, 
        usersPage: usersReducer
    }
});

