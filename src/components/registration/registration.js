import React, {useState} from 'react'
import './registration.css' 
import Input from '../input/input'
import {registration} from '../../actions/user'

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Registration</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Type email here..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Type password here..."/>
            <button className='registration__btn' onClick={() => registration(email, password)}>Submit</button>
        </div>
    )
}

export default Registration