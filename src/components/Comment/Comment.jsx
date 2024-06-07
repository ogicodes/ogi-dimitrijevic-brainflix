import './Comment.scss'
import Image from '../Image/Image'

export default function Comment(props) {    
    const {id, name, timestamp, comment} = props

    const date = new Date(timestamp)

    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    const fullDate = `${day}/${month}/${year}`

    return (
            <div key={id} className="comment">
            <div className="comment__avatar">
                <Image />
            </div>
            <div className="comment__container">
                <div className="comment__title">
                    <p className='comment__name'>{name}</p>
                    <p className="comment__date">{fullDate}</p>
                </div>
                <p className="comment__comment">{comment}</p>
            </div>
        </div>
    )
}