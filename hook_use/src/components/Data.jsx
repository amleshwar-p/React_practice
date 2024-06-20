import { useState } from "react"
import datas from './data.json'
const Data = () => {

    const [nData, setData] = useState(datas);

    console.log(datas);

    const clearAll = () => {
        setData([])
    }
    const removeThis = (itemID) => {
        setData(nData.filter(items => items.id !== itemID))
    }
    const updateThis = (itemID) => {
        setData(nData.map(items => {
            if (items.id === itemID) {
                return { name: "NEW NAME" }
            } else {
                return items
            }
        }))

    }
    return (
        <div>
            <ul>
                {
                    nData.map(items =>
                        <li key={items.id}>
                            {items.name}
                            <br></br>
                            <button onClick={() => removeThis(items.id)}>Remove this</button>
                            <button onClick={() => updateThis(items.id)}>Update this</button>


                        </li>
                    )
                }

            </ul>
            <button onClick={clearAll}>Cear All</button>
        </div>
    )
}

export default Data