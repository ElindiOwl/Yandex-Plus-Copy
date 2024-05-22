import style from './DropDown-Menu.module.scss';
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

interface DropDownMenuProps {
    onClick: () => void;
    toggleRef: RefObject<HTMLDivElement>;
}

const portal = document.getElementById('portal');

export const DropDownMenu: FC<DropDownMenuProps> = ({ onClick }) =>
    ReactDOM.createPortal(
        <div className={style.suka}>
            <div className={style.dropdownMenu}>
                <div className={style.dropdownMenu__overlay} onClick={onClick}></div>
                <div id='dropdownMenu' className={style.dropdownMenu__items}>
                    <DropDownMenuItem link={'/subControl'} image={subControl} description={'Управление подпиской'} />
                    <br />
                    <DropDownMenuItem link={'/family'} image={family} description={'Плюс для близких'} />
                    <DropDownMenuItem link={'/sharing'} image={sharing} description={'Подарить Плюс'} />
                    <br />
                    <CustomAccordion mapToUse={menuAccordionMap} containerClassName={style.dropdownMenu__accordion}
                                     headerContainerClassName={style.dropdownMenu__accordionHeader} />

                    <DropDownMenuItem link={'/allOptions'} image={options} description={'Все опции Плюса'} />
                    <br />
                    <DropDownMenuItem link={'/support'} image={support} description={'Поддержка'} />
                    <DropDownMenuItem link={'/suggestions'} image={suggestions}
                                      description={'Предложение по улучшению'} />
                    <br />
                    <DropDownMenuItem link={'/promo'} image={promo} description={'Активация промокода'} />
                </div>
            </div>
        </div>
        ,
        portal,
    );
