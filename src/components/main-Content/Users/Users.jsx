import React from "react";

const Users = (props) => {


    //это условие должно реализовать использование setUser в пропсах, но выкидывает ошибку
    if(props.users.length === 0) {
        props.setUsers(
            [
                
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
        )
    }


    
    return (
        <div>
            {
                props.users.map( (user) => {
                    return (
                        <div key={user.id}>
                            <img src={user.photoUrl} alt="avatar"/> 
                            <div>
                                {user.followed 
                                ? <button onClick={() => { props.unfollow(user.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(user.id)}}>follow</button>}
                            </div>
                            <p>
                                <span>{user.name}</span>
                                <span>{user.location.country}</span>
                                <span>{user.location.city}</span>
                            </p>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users; 