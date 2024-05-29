import Image from "../Image/Image"
import MohanMuruge from '../../assets/images/images/Mohan-muruge.jpg' 
import Logo from '../../assets/images/logo/BrainFlix-logo.svg'
export default function Header() {

    return (
        <>
            <Header class='header'>
                <a href="#"><img class='header__logo' src={Logo} alt="BrainFlix Logo" ></img></a>
                <div>
                    <form action="submit" className="header__form">
                        <button className="header__form__button"></button>
                        <input type="text" className="header__form__search" />
                    </form>
                    <Image src={MohanMuruge} alt='Profile Picture of Mohan Muruge' />
                </div>
                <button></button>
                
            </Header>
        </>
    )
}