import { FC } from 'react';
import logo from 'src/Shared/assets/Icons/Logo.png';
import './Header.scss';
import { useScrollHandler } from 'src/Shared/lib/useScrollHandler.ts';
import { HeaderPortrait } from 'src/Features/ui/Header/HeaderPortrait/Header-Portrait.tsx';
import { HeaderMenu } from 'src/Features/ui/Header/Header-Menu/Header-Menu.tsx';

interface HeaderProps {
    isScrollableStyle?: boolean;
}

const Header: FC<HeaderProps> = ({ isScrollableStyle = true }) => {

    const scrolled = useScrollHandler(isScrollableStyle);

    return (
        /*исправить классы и разбить на компоненты*/
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