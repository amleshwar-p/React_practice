import { useContext } from "react"
import { GreetContext } from "./A"



const C = () => {

    const useCon = useContext(GreetContext);

    console.log(useCon)
    return (
        <div>

            <h1>{useCon.greet}{useCon.greet2}</h1>


        </div>
    )
}

export default C

//     <GreetContext.Consumer GreetContext.Consumer >
//     {
//                     (val) => {
//     return (
//         <GreetContext2.Consumer>
//             {
//                 (val2) => {
//                     return <h1>{val} {val2}</h1>
//                 }
//             }
//         </GreetContext2.Consumer>
//     )
// }
//                 }
//             </GreetContext.Consumer >