import MobileList from "./MobileList"
import details from "../details.json"

const Mobile = () => {

    return (
        <>
            {details.map((ele) => {
                return <MobileList
                    mobimage={ele.image}
                    mobtitle={ele.title}
                    mobprice={ele.price}
                />
            }
            )}



        </>
    )
}

export default Mobile