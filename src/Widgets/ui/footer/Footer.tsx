import './Footer.scss';
import { FooterLinks } from 'src/Entities/ui/footer/Footer-Links/Footer-Links';
import { FooterText } from 'src/Entities/ui/footer/Footer-Text/Footer-Text';

const Footer = () => {
    return (
        <footer className='footer'>
            <FooterLinks />
            <br />
            <FooterText />
        </footer>
    );
};

export default Footer;
