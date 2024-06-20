

const MobileList = (props) => {

    const { mobimage, mobprice, mobtitle } = props;

    return (
        <>
            {console.log(props)}
            <div className="mob-list">
                <img src={mobimage} className="img" />
                <div>
                    <h2>{mobtitle}</h2>
                    <p>{mobprice} $</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default MobileList