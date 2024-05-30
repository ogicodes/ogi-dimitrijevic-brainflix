// this component creates each card in the next videos section

export default function DataCard(props){

    const {title, id, image, channel} = props.video 
    const { setSelectedVideoId } = props

    const clickHandler = () => {
        setSelectedVideoId(id)
    }

    return(
        <div onClick={clickHandler} className="card" >
            <img src={image} alt='picture about ${props.title}' className="card__image" ></img>
            <div className="card__container">
                <p className="card__title">{title}</p>
                <p className="card__channel">{channel}</p>
            </div>        
        </div>
    )
}