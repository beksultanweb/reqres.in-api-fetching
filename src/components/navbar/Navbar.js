import React from 'react'
import './navbar.css' 
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/UserReducer'

const Navbar = () => {
    // const isAuth = useSelector(state => state.user.isAuth)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="navbar__header">Logo</div>
            {!token && <div className='navbar__login'><Link to="/login">Login</Link></div>}
            {!token && <div className="navbar__registration"><Link to="/registration">Registration</Link></div>}
            {token && <div className="navbar__login" onClick={() => dispatch(logout())}>Exit</div>}
        </div>
    )
}

export default Navbar