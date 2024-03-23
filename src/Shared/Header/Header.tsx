import { useState, useEffect, FC } from 'react';
import logo from './Icons/Logo.png';
import './Header.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderPortrait from './HeaderPortrair/HeaderPortrait';

interface HeaderProps {
    isScrollableStyle?: boolean;
}

const Header: FC<HeaderProps> = ({ isScrollableStyle = true }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!isScrollableStyle) {
            return;
        }
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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