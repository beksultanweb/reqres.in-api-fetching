import React from 'react';
import './user.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div className='users-list'>
            <div>
                <Link to={{
                pathname: `/users/${user.id}`    
            }}><img src={user.avatar} alt="avatar"/></Link>
                <div>{user.email}</div>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
            </div>
            
            
        </div>
    );
};

export default User;