import '../VideoCard/VideoCard.scss'


// this component creates each card in the next videos section

export default function VideoCard(props){

    const {title, id, image, channel} = props.video 
    const { setSelectedVideoId } = props

    const clickHandler = () => {
        setSelectedVideoId(id)
        console.log(id)
    }

    return(
        <div onClick={clickHandler} className="card" >
            <div className='card__photo-container'>
                <img src={image} alt={`picture about ${title}`} className="card__photo-image" ></img>
            </div>
            <div className="card__text-container">
                <p className="card__title">{title}</p>
                <p className="card__channel">{channel}</p>
            </div>        
        </div>
    )
}