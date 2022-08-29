import React, {useEffect} from 'react'
// import './navbar.css' 
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleUser } from '../../actions/getusers'

const Userpage = () => {
    // const isAuth = useSelector(state => state.user.isAuth)
    const user = useSelector(state => state.users)
    console.log(user)
    const dispatch = useDispatch()
    const params = useParams()
    // console.log(params)

    useEffect(() => {
        dispatch(getSingleUser(parseInt(params.userId)))
    }, [])

    return (
        <div>
            <img src={user.users.data.avatar} alt="avatar" />
            <div>{user.users.data.email}</div>
            <div>{user.users.data.first_name}</div>
            <div>{user.users.data.last_name}</div>
        </div>
    )
}

export default Userpage