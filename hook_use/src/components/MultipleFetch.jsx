import React, { useEffect, useState } from 'react'

const MultipleFetch = () => {
    const [users, setUsers] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://api.github.com/users");
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    },[])

    if (isloading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <h1>Users listss</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.login}</li>
                })}
            </ul>
        </div>
    )
}

export default MultipleFetch