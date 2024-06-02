import './Comment.scss'
import Image from '../Image/Image'

export default function Comment(props) {    
    const {key, name, timestamp, comment} = props
    return (
            <div key={key} className="comment">
            <div className="comment__avatar">
                <Image />
            </div>
            <div className="comment__container">
                <div className="comment__title">
                    <p className='comment__name'>{name}</p>
                    <p className="comment__date">{timestamp}</p>
                </div>
                <p className="comment__comment">{comment}</p>
            </div>
        </div>
    )
}