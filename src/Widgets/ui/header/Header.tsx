import { FC } from 'react';
import logo from '../../../Shared/assets/Icons/Logo.png';
import './Header.scss';
import { useScrollHandler } from 'src/Shared/lib/useScrollHandler';
import { HeaderPortrait } from 'src/Features/header/ui/headerPortrair/HeaderPortrait';
import { HeaderMenu } from 'src/Features/header/ui/headerMenu/HeaderMenu';

interface HeaderProps {
    isScrollableStyle?: boolean;
}

const Header: FC<HeaderProps> = ({ isScrollableStyle = true }) => {

    const scrolled = useScrollHandler(isScrollableStyle);

    return (
        <header className={`HeaderDiv ${scrolled ? 'scrolled' : ''} ${!isScrollableStyle ? 'relativePosition' : ''}`}>
            <div className='navbarDiv'>
                <div className='headerLogo'>
                    <a href='/' className='logo'>
                        <img src={logo} height='100%' width='190' className='logoImage' alt='Logo' />
                    </a>
                </div>
                <div className='blankDiv'>

                </div>
                <div className='headerMenu'>
                    <HeaderMenu />
                </div>
                <div className='headerPortrait'>
                    <HeaderPortrait />
                </div>
            </div>

        </header>
    );
};

export default Header;