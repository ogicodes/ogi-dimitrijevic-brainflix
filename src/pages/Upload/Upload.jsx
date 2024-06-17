import '../Upload/Upload.scss'
import thumb from '../../assets/images/images/Upload-video-preview.jpg'
import Button from '../../components/Button/Button'
import publish from '../../assets/images/icons/publish.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export default function Upload() {
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)

    async function postVideos() {
        try {
          await axios.post(`http://localhost:8080/videos`, {title: title, description: desc});
        } catch (error) {
          console.error("Error", error);
          throw error;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`your video has been submitted. good job. I'm proud of you. <3`)
        console.log(title, desc)
        postVideos()
      }

    return (
        <>
            <div className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__form-section">
                    <div className="upload__thumb-section">
                        <p className="upload__text">VIDEO THUMBNAIL</p>
                        <img className='upload__thumb-image' src={thumb} alt="thumbnail of image" />
                        <div className='upload__thumb-spacer'></div>
                    </div>
                    <form className='upload__form' onSubmit={handleSubmit}>
                        <label className='upload__text' htmlFor="title">TITLE YOUR VIDEO</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='upload__form-title' type="text" placeholder='Add a title to your video'/>
                        <label className='upload__text' htmlFor="desctiption">ADD A VIDEO DESCRIPTION</label>
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='upload__form-description' type="textarea" placeholder='Add a description to your video' rows="4" cols="50" />
                        <Button type='submit' src={publish} alt='upload image' content='PUBLISH' />
                        <ul className='upload__list'>
                            <li className='upload__item'>
                                <Link to='/' className='upload__link'><button className='upload__cancel' >CANCEL</button></Link>
                                <Button type='submit' className='button-upload' src={publish} alt='upload image' content='PUBLISH' />
                            </li>
                        </ul>
                    </form>

                </div>

            </div>
        </>
    )
}