import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

// let reducers = combineReducers({
//     profilePage: profileReducer, 
//         dialogsPage: dialogsReducer
// })

export default configureStore({
    reducer: {
        profilePage: profileReducer, 
        dialogsPage: dialogsReducer
    }
});

