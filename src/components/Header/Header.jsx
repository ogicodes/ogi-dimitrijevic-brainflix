import Image from "../Image/Image"
import MohanMuruge from '../../assets/images/images/Mohan-muruge.jpg' 
import Logo from '../../assets/images/logo/BrainFlix-logo.svg'
import Magnifier from '../../assets/images/icons/search.svg'


export default function Header() {

    return (
        <>
            <Header class='header'>
                <a href="#"><img class='header__logo' src={Logo} alt="BrainFlix Logo"></img></a>
                <div>
                    <form action="submit" className="header__form">
                        <button class="header__form__button" src={Magnifier}></button>
                        <input type="text" placeholder="Search" className="header__form__search" />
                    </form>
                    <Image src={MohanMuruge} alt='Profile Picture of Mohan Muruge' />
                </div>
                
            </Header>
        </>
    )
}