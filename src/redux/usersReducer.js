const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1, name: 'Andrew', location: {
                city: 'Minsk', country: 'Belarus'
            }, followed: true, 
            photoUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146'
        },
        {
            id: 2, name: 'Klava', location: {
                city: 'Moscow', country: 'Russia'
            }, followed: false, 
            photoUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146'
        },
        {
            id: 3, name: 'Lina', location: {
                city: 'Lima', country: 'Peru'
            }, followed: true, 
            photoUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146'
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

export default usersReducer;

export const followAC = (userId) => {
    return ({ type: FOLLOW, userId })
};

export const UnFollowAC = (userId) => {
    return ({ type: UNFOLLOW, userId })
}

export const setUsersAC = (users) => {
    return ({ type: SET_USERS, users })
}