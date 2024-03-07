import { useState, useEffect } from 'react';
import logo from '../../assets/Icons/Logo.png';
import './Header.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderPortrait from './HeaderPortrair/HeaderPortrait';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`HeaderDiv ${scrolled ? 'scrolled' : ''}`}>
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
        </div>
    );
}

export default Header;