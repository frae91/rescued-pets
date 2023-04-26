import React, {useEffect, useState} from 'react';
import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom'

export default function Header( {login, updateLogin} ) {

    const [ isLoggedIn, setIsLoggedIn ] = useState(login);
    const navigate = useNavigate();
    // const history = useHistory();

    useEffect( () => {
        console.log(login);
    },[])


    function handleClick() {
        navigate('/');
        // history.push('/')
        // /cats->/
        // history.back()
    }

    function goBack() {
        navigate(-1);
    }

    function goForward() {
        navigate(1);
    }
    
    function logout() {
        updateLogin(false);
        navigate('/login');
    }

    return (
        <React.Fragment>
            <nav>
                <h1 onClick={handleClick}>Rescued Pets</h1>
                <ul className="navbar">
                    <li><Link to="/cats">Cats</Link></li>
                    <li><Link to="/dogs">Dogs</Link></li>
                </ul>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goForward}>Go Forward</button>
                <button onClick={logout}>Logout</button>
            </nav>
            {
                isLoggedIn
                ?
                    <Outlet />
                :
                    <Navigate to="/login" />
            }
            
        </React.Fragment>
    )
}
