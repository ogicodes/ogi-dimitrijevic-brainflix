import '../Image/Image.scss'

export default function Image(props) {
    return(
        <div className='avatar'>
            <img className='avatar__img' src={props.src} alt={props.alt} ></img>
        </div>
    )
}


