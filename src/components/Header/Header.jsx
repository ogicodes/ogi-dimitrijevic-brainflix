import Image from "../Image/Image"
import MohanMuruge from '../../assets/images/images/Mohan-muruge.jpg' 
import Logo from '../../assets/images/logo/BrainFlix-logo.svg'
import Magnifier from '../../assets/images/icons/search.svg'
import Button from "../Button/Button"
import upload from '../../assets/images/icons/upload.svg'
import '../Header/Header.scss'

export default function Header() {

    return (
        <>
            <header className='header'>
                <a className="header__link" href="#"><img className='header__logo' src={Logo} alt="BrainFlix Logo"></img></a>
                <div className="header__container">
                    <form action="submit" className="header__form">
                        <button className="header__button"><img src={Magnifier}></img></button>
                        <input type="text" placeholder="Search" className="header__search" />
                        <Button className='button-tablet' src={upload} alt='upload image' content='UPLOAD' />
                        <Image src={MohanMuruge} alt='Profile Picture of Mohan Muruge' />
                    </form>
                    <Button src={upload} alt='upload image' content='UPLOAD' />
                </div>
            </header>
        </>
    )
}