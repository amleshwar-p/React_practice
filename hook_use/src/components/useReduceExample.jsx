import { useReducer } from "react"

const initState = {
    data: [],
    loading: false,
    error: null
}

function reducer(state, action) {
    console.log(state, action)
    switch (action.type) {
        case 'FETCH_DATA_START':
            return { ...state, loading: true }
        case 'FETCH_DATA_SUCCESS':
            return { loading: false, data: action.payload }
        case 'FETCH_DATA_FAILUR':
            return { ...state, loading: false, error: action.payload.message }
        case 'DELETE_DATA':
            return { ...state, data: state.data.filter((item) => item.id !== action.payload) }
        case 'ADD_DATA':
            return { ...state, data: [...state.data, action.payload] }
        default:
            return state


    }
}

const UseReduceExample = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    const fetchData = async () => {
        dispatch({ type: "FETCH_DATA_START" });
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
            console.log(data);
        } catch (error) {
            dispatch({ type: "FETCH_DATA_ERROR", payload: error.message });
        }
    }

    const addData = (newData) => {
        dispatch({ type: "ADD_DATA", payload: newData })
    }

    const deleteData = (id) => {
        dispatch({ type: "DELETE_DATA", payload: id })

    }
    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {state.loading && <p>Loading...</p>}
            {state.error && <p>Error :{state.error}</p>}
            <ul>
                {
                    state.data.map((item) =>
                        <li key={item.id}>
                            {item.title}{" "}
                            <button onClick={() =>
                                deleteData(item.id)

                            }>Delete this</button>
                        </li>
                    )
                }
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                addData({
                    id: Date.now(),
                    title: e.target.title.value

                })
            }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    onChange={(e) => {
                        dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
                    }}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default UseReduceExample