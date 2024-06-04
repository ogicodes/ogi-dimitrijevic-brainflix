import Image from "../Image/Image"
import MohanMuruge from '../../assets/images/images/Mohan-muruge.jpg' 
import Logo from '../../assets/images/logo/BrainFlix-logo.svg'
import Magnifier from '../../assets/images/icons/search.svg'
import Button from "../Button/Button"
import upload from '../../assets/images/icons/upload.svg'
import '../Header/Header.scss'
import { Link } from 'react-router-dom'


export default function Header() {

    return (
        <>
            <header className='header'>
                <ul className="header__list header__list--modifier">
                    <li className="header__item">
                        <Link className="header__link" to='/'><img className='header__logo' src={Logo} alt="BrainFlix Logo"></img></Link>
                    </li>
                </ul>
                <div className="header__container">
                    <form action="submit" className="header__form">
                        <button className="header__button"><img src={Magnifier}></img></button>
                        <input type="text" placeholder="Search" className="header__search" />
                        <ul className="header__list">
                            <li className="header__item">
                                <Link className="header__link" to='upload' ><Button className='button-tablet' src={upload} alt='upload image' content='UPLOAD' /></Link>
                            </li>
                        </ul>
                        <Image src={MohanMuruge} alt='Profile Picture of Mohan Muruge' />
                    </form>
                    <ul className="header__list">
                        <li className="header__item">
                            <Link className="header__link" to='upload'><Button src={upload} alt='upload image' content='UPLOAD' /></Link>
                        </li>
                    </ul>
                    
                </div>
            </header>
        </>
    )
}