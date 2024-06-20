import { useReducer } from 'react'

const reducer = (state, action) => {
    console.log(state, action)
    if (action.type === "inc") {
        return { count: state.count + 1 }
    } else if (action.type === "dec") {
        return { count: state.count - 1 }
    } else {
        return new Error("Unsupported action")
    }
}

const UseReducerComp = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({ type: "inc" })
            }}>+</button>
            <button onClick={() => {
                dispatch({ type: "dec" })
            }}>-</button>

        </div>
    )
}

export default UseReducerComp