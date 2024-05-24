import './Footer.scss'
import { FooterLinks } from 'src/Entities/footer/Footer-Links/Footer-Links.tsx'
import { FooterText } from 'src/Entities/footer/Footer-Text/Footer-Text.tsx'

const Footer = () => {
	return (
	/*разбить на компоненты и исправить классы*/
		<footer className='footer'>
			<FooterLinks />
			<br />
			<FooterText />
		</footer>
	)
}

export default Footer
