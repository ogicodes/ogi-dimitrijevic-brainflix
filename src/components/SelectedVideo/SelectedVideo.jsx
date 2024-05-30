export default function SelectedVideo(props){

    console.log(props)
    const {title, channel, description, image} = props.selectedVideo
    return (
        <div className="selected__Video">
            <h2>{title}</h2>
            <img src={image} alt="" className="" />
            <p>{description}</p>
            <p>{channel}</p>
        </div>
    )
}