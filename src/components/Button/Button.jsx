import '../Button/Button.scss'

export default function Button(props) {
    return(
            <button className={`button ${props.className} `}><img className='button__image' src={props.src} alt={props.alt}></img>{props.content}</button>
    )
}