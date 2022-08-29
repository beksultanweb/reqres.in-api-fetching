import React, {useState} from 'react'
import './registration.css' 
import Input from '../input/input'
import {login} from '../../actions/user'
import { setCurrentUser } from '../../reducers/GetUsersReducer'
import {useDispatch} from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    return (
        <div className='registration'>
            <div className="registration__header">Authorization</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Type email here..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Type password here..."/>
            <button className='registration__btn' onClick={() => dispatch(login(email, password))} onKeyDown={() => dispatch(setCurrentUser(email))}>Log in</button>
        </div>
    )
}

export default Login