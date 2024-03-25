import './Footer.scss';
import { FooterLinks } from 'src/Entities/footer/ui/Footer-Links/Footer-Links';
import { FooterText } from 'src/Entities/footer/ui/Footer-Text/Footer-Text';

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
