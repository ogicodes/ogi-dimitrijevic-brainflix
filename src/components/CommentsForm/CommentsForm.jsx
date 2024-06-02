import MohanMuruge from '../../assets/images/images/Mohan-muruge.jpg';
import ButtonText from '../../assets/images/icons/add_comment.svg';
import Button from '../Button/Button';
import Image from '../Image/Image';
import './CommentsForm.scss';

export default function CommentsForm() {

    return (
        <div className="form">
            <div className="form__avatar">
                <Image src={MohanMuruge} alt='Profile Picture of Mohan Muruge' />
            </div>
            <div className="form__container">
                <form className="form__form">
                    <label className='form__label' htmlFor="comment">JOIN THE CONVERSATION</label>
                    <div className='form__input-group'>
                        <input type="textbox" name='comment' className='form__input' placeholder='Add a new comment'/>
                        <Button className='button-form' src={ButtonText} alt='make new comment' content='COMMENT' />
                    </div>
                </form>
            </div>
        </div>
    )
}