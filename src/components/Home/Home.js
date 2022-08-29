import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsers } from '../../actions/getusers'
import User from './user/user'

const Home = () => {
    const dispatch = useDispatch()
    
    const { username } = useSelector(state => state.user)
    console.log("state: ", username)
    // console.log(useSelector(state => state.users));
    // state.users.users.data.map((user) => <User user={user} key={user.id} />
    const users = useSelector(state => state.users.users.data?.map((user) => <User user={user} key={user.id} />))
    console.log("? ", users)
    useEffect(() => {
        dispatch(getUsers(users))
    }, [])

    return (
        <div>
            <div>Click the IMG to open particular data</div>
            {users}
        </div>
    )
}

export default Home