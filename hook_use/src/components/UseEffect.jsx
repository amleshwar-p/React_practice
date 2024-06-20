import { useEffect, useState } from "react"

const UseEffect = () => {

    // useEffect(() => {
    //     console.log("useEffect");

    //     //code to run after render or update.

    // }, [dependency]);



    useEffect(() => {
        alert("We are in use state")
    },[])


    const [clicked, setClicked] = useState();



    return (
        <div>

            <button onClick={() => setClicked("Subscribed")}>Subscribe</button>
            <br />
            <hr />
            <button onClick={() => setClicked("To")}>To</button>
            <br />
            <hr />
            <button onClick={() => setClicked("beebrox name")}>Beebrox</button>

            <h1>{clicked}</h1>

        </div>
    )
}

export default UseEffect