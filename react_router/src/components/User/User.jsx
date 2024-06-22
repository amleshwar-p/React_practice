import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { userid } = useParams();
    return (
        <div className='bg-gray-400 m-5 p-10 text-center text-4xl text-red-600'>User : {userid} </div>
    )
}

export default User