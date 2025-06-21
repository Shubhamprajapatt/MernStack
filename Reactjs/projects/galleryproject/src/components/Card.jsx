function Card({result}){
    return (
        <>
        <div className="carddesign">
            <img id="imgall" src={result.filename} alt="img not available" />
        <p>{result.date}</p>
        <p>{result.size}</p>
        </div>
        </>
    )
}
export default Card;