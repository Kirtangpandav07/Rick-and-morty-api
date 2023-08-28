

const Card=(props) =>{
    return(
        <div className="sec">
            <div className="img">
                <img src={props.image} alt=""  height={222} width={229}/>
            </div>
            <div className="text">
                <div className="s1">
                    <h1>{props.name}</h1>
                    <h2>{props.status}:-{props.species}</h2>
                </div><br></br>
                <div className="s2">
                    <h3>Last known location:</h3>
                    <i>{props.location}</i>
                    <h3>{props.locname}</h3>
                </div><br></br>
                <div className="s3">
                
                    <h3>{props.seen}</h3>
                </div>
            </div>
        </div>
    )
}
export  default Card;