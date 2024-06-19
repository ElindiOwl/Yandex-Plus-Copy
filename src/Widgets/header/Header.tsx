import logo from 'src/Shared/assets/Icons/Logo.png';
import './Header.scss';
import { FC } from 'react';
import { useScrollHandler } from 'src/Shared/lib/useScrollHandler.ts';
import { HeaderPortrait } from 'src/Features/ui/Header/HeaderPortrait/Header-Portrait.tsx';
import { HeaderMenu } from 'src/Features/ui/Header/Header-Menu/Header-Menu.tsx';
import { Link } from 'react-router-dom';


interface HeaderProps {
    isScrollableStyle?: boolean;
}

/*Вынести в энтити и ему подобные + в отдельный файл вынести z-индексы*/
export const HEADER = 'header';

const Header: FC<HeaderProps> = ({ isScrollableStyle = true }) => {

	const scrolled = useScrollHandler(isScrollableStyle);

	return (
	/*исправить классы и разбить на компоненты*/
		<header className={`HeaderDiv ${scrolled ? 'scrolled' : ''} ${!isScrollableStyle ? 'relativePosition' : ''}`}
			id={HEADER}
		>
			<div className='navbarDiv'>
				<div className='headerLogo'>
					<Link className='logo' to='/'>
						<img alt='Logo' className='logoImage' height='100%' src={logo} width='190' />
					</Link>
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