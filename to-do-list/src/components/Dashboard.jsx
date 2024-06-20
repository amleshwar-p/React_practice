import React, { useState } from 'react'

const Dashboard = () => {
    const [task, setTask] = useState("");
    const [displayTask, setDisplayTask] = useState([])

    const inputTask = (e) => {
        setTask(e.target.value)
    }
    const showTask = () => {
        if (task.trim() !== "") {
            setDisplayTask([...displayTask, task])
            setTask(" ")
        }
    }
    const deleteTask = (itemID) => {

        const newDisplay = displayTask.filter((task, index) => index !== itemID);
        setDisplayTask(newDisplay);

    }
    return (
        <>
            <div className='mx-auto  w-4/12 bg-gray-500 py-3 px-2'>
                <input
                    type='text'
                    value={task}
                    placeholder='Enter your task'
                    onChange={inputTask}
                />
                <button className='bg-yellow-400'
                    onClick={showTask}
                > Add
                </button>
                <div>
                    {displayTask.map((task, index) =>
                    (
                        <div key={index} className='flex my-4'>
                            <h2 >{task}</h2>
                            <button className='bg-yellow-400 mx-4'
                                onClick={() => deleteTask(index)}
                            >Del</button>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Dashboard