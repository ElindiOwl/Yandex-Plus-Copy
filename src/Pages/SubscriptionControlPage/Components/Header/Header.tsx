import logo from '../assets/Icons/Logo.png';
import './HeaderSubControl.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderPortrait from './HeaderPortrair/HeaderPortrait';

function Header() {

    return (
        <div className='HeaderDivSubControl'>
            <div className='navbarDivSubControl'>
                <div className='headerLogoSubControl'>
                    <a href='/' className='logoSubControl'>
                        <img src={logo} height='100%' width='190' className='logoImageSubControl' alt='Logo' />
                    </a>
                </div>
                <div className='blankDivSubControl'>

                </div>
                <div className='headerMenuSubControl'>
                    <HeaderMenu />
                </div>
                <div className='headerPortraitSubControl'>
                    <HeaderPortrait />
                </div>
            </div>

        </div>
    );
}

export default Header;