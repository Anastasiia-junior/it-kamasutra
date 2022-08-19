import React from "react";
import * as axios from 'axios';
import userPhoto from '../../../assets/img/icon-256x256.png';

class User extends React.Component {
    getUsers = ( )=> {
        if(this.props.users.length === 0) {
            axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
             })
        }

    }
    render () {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {
                    this.props.users.map( (user) => {
                        return (
                            <div key={user.id}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"/> 
                                <div>
                                    {user.followed 
                                    ? <button onClick={() => { this.props.unfollow(user.id)}}>Unfollow</button>
                                    : <button onClick={() => {this.props.follow(user.id)}}>follow</button>}
                                </div>
                                <p>
                                    <span>{user.name}</span>
                                    <span>user.location.country</span>
                                    <span>user.location.city</span>
                                </p>
    
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default User;