import { CustomAccordion } from 'src/Shared/ui/Accordion/Custom-Accordion/Custom-Accordion.tsx';
import { menuAccordionMap } from 'src/Entities/header/lib/Menu-Accordion-Map/menu-accordion-map.tsx';
import { DropDownMenuItem } from 'src/Shared/ui/DropDown-Menu/DropDown-Menu-Item/DropDown-Menu-Item.tsx';

import subControl from '/src/Shared/assets/Icons/subControl.svg';
import family from '/src/Shared/assets/Icons/family.svg';
import sharing from '/src/Shared/assets/Icons/sharing.svg';
import options from '/src/Shared/assets/Icons/options.svg';
import support from '/src/Shared/assets/Icons/support.svg';
import suggestions from '/src/Shared/assets/Icons/suggestions.svg';
import promo from '/src/Shared/assets/Icons/promo.svg';

import ReactDOM from 'react-dom';
import { FC, RefObject } from 'react';

import style from './DropDown-Menu.module.scss';

interface DropDownMenuProps {
    onClick: () => void;
    toggleRef: RefObject<HTMLDivElement>;
}


export const DropDownMenu: FC<DropDownMenuProps> = ({ onClick }) => {

	const portal = document.getElementById('header');

	if (portal) {
		return ReactDOM.createPortal(
			<div className={style.dropdownMenu}>
				<div className={style.dropdownMenu__overlay} onClick={onClick}></div>
				<div className={style.dropdownMenu__items} id='dropdownMenu'>
					<DropDownMenuItem description={'Управление подпиской'} image={subControl}
						link={'subControl'} />
					<br />
					<DropDownMenuItem description={'Плюс для близких'} image={family} link={'/family'} />
					<DropDownMenuItem description={'Подарить Плюс'} image={sharing} link={'/sharing'} />
					<br />
					<CustomAccordion containerClassName={style.dropdownMenu__accordion}
						headerContainerClassName={style.dropdownMenu__accordionHeader}
						mapToUse={menuAccordionMap} />

					<DropDownMenuItem description={'Все опции Плюса'} image={options} link={'/allOptions'} />
					<br />
					<DropDownMenuItem description={'Поддержка'} image={support} link={'/support'} />
					<DropDownMenuItem description={'Предложение по улучшению'} image={suggestions}
						link={'/suggestions'} />
					<br />
					<DropDownMenuItem description={'Активация промокода'} image={promo} link={'/promo'} />
				</div>
			</div>
			,
			portal,
		);
	}
};


