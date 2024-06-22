import { useState, useEffect } from 'react';

const Github = () => {
    const [username, setUsername] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if (username) {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => setData(data));
        }
    }, [username]);

    return (
        <>
            <div className='bg-gray-500 p-8 text-center text-3xl'>
                <div>
                    <input
                        placeholder='Enter Username'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <h2>{username}</h2>
                </div>

                {data.followers !== undefined && (
                    <>
                        Github Followers : {data.followers}
                        <br />
                        {data.name}
                        {data.avatar_url && <img src={data.avatar_url} width="250px" alt={`${data.name}'s avatar`} />}
                    </>
                )}
            </div>
        </>
    );
}

export default Github;
