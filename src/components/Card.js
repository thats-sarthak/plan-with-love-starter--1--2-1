
function Card({id, image, info, price, name}) {
    return(
        <div className="card">
            <div>
                <img src={image}/>  
                <div>
                    <h4> "Sarthak's With Shubhangi In Holiday"{name}</h4>
                    <h4>{price}</h4>
                </div>
                <div>
                    <h4>{info}</h4>
                </div>
            </div>
        </div>
    )
}


export default Card;