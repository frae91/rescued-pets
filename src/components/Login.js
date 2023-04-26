import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login( { updateLogin}) {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <h1>Login Page</h1>
            <button onClick={() => {updateLogin(true); navigate('/')}}>LOGIN NOW!</button>
        </React.Fragment>
    )
}