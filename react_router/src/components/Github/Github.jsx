import { useLoaderData } from 'react-router-dom';

const Github = () => {


    // const [username, setUsername] = useState("");
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     if (username) {
    //         fetch(`https://api.github.com/users/${username}`)
    //             .then(response => response.json())
    //             .then(data => setData(data));
    //     }
    // }, [username]);

    const data = useLoaderData();

    return (
        <>
            <div className='bg-gray-500 p-8 text-center text-3xl'>


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



export const githubInfoLoad = async () => {

    const response = await fetch(`https://api.github.com/users/amleshwar-p`)
    return response.json()

}