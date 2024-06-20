import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users").then(response => response.json()).
            then(data => setUsers(data));
    })
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {
                    users.map(user => <li key={user.id}><a href={user.html_url}>{user.login}</a>
                        <br />
                        <img src={user.avatar_url}
                            height="50px" />
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Fetch