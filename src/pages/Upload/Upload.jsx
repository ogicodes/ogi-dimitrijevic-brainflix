import '../Upload/Upload.scss'
import thumb from '../../assets/images/images/Upload-video-preview.jpg'
import Button from '../../components/Button/Button'
import publish from '../../assets/images/icons/publish.svg'
import { Link } from 'react-router-dom'


export default function Upload() {

    return (
        <>
            <div className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__form-section">
                    <div className="upload__thumb-section">
                        <p className="upload__text">VIDEO THUMBNAIL</p>
                        <img class='upload__thumb-image' src={thumb} alt="thumbnail of image" />
                    </div>
                    <form className='upload__form' action="" method="post">
                        <label className='upload__text' htmlFor="title">TITLE YOUR VIDEO</label>
                        <input className='upload__form-title' type="text" placeholder='Add a title to your video'/>
                        <label className='upload__text' htmlFor="desctiption">ADD A VIDEO DESCRIPTION</label>
                        <textarea className='upload__form-description' type="textarea" placeholder='Add a description to your video' rows="4" cols="50" />
                    </form>
                    <Button src={publish} alt='upload image' content='PUBLISH' />
                        <ul className='upload__list'>
                            <li className='upload__item'>
                                <Link to='/' className='upload__link'><button className='upload__cancel' >CANCEL</button></Link>
                                <Button className='button-upload' src={publish} alt='upload image' content='PUBLISH' />
                            </li>
                        </ul>
                </div>

            </div>
        </>
    )
}