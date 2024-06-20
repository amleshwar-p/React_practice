import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  console.log(state, action);
}

const App = () => {

  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //reducer (coffe maker machine) function
  // it is a pure function
  //state(coffee powder) aur action(paani) arguments hote iske andr
  // result milega new state (coffee )

  //pure function
  //10 + 10 = 20

  const handleClickInc = () => {
    dispatch({ type: "inc" })
  }
  const handleClickDec = () => {
    dispatch({ type: "dec" })
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </>
  );
}

export default App;
