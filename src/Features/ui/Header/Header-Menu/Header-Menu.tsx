import style from './Header-Menu.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import { QuestionsAccordion } from 'src/Features/ui/Questions/Questions-Accordion.tsx';
import { menuAccordionMap } from 'src/Entities/header/lib/Menu-Accordion-Map/menu-accordion-map.tsx';
import { useEffect, useRef, useState } from 'react';

export const HeaderMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className={style.headerMenu} ref={menuRef}>
            <div className={style.headerMenu__menuToggle} onClick={toggleMenu}>
                <Hamburger size={20} toggled={isMenuOpen} />
                <h5 className={style.headerMenu__menuWord}>Меню</h5>
            </div>
            {isMenuOpen && <div className={style.headerMenu__overlayHeaderMenu} onClick={toggleMenu}></div>}
            {isMenuOpen && (
                <div className={style.headerMenu__dropdownMenu}>
                    <div className={style.headerMenu__menuItem}>
                        <a href='/subControl'>
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3601332/25032996-f891-412d-8a16-afd878e1952e/orig'
                                alt='media'
                            />
                            Управление подпиской
                        </a>
                    </div>
                    <div className={style.headerMenu__menuItem}>
                        <a href='/family'>
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3502168/0908f7d2-8827-4eab-adbb-1e48a07f1039/orig'
                                alt='media'
                            />
                            Плюс для близких
                        </a>
                    </div>
                    <div className={style.headerMenu__menuItem}>
                        <a href='/sharing'>
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3601332/7abe6ef7-b9b8-444e-b781-221c97cd52b9/orig'
                                alt='media'
                            />
                            Подарить Плюс
                        </a>
                    </div>
                    <QuestionsAccordion mapToUse={menuAccordionMap} containerClassName={style.headerMenu__accordion} />
                    <div className={style.headerMenu__menuItem}>
                        <a href='/allOptions'>
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3737142/e04ad338-c8fc-459d-bfe1-3d01c4c9f099/orig'
                                alt='media'
                            />
                            Все опции Плюса
                        </a>
                    </div>
                    <div className={style.headerMenu__menuItem}>
                        <a href='/support'>
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3756502/bca8cc02-c7a5-494d-b3a1-609af2469577/orig'
                                alt='media'
                            />
                            Поддержка
                        </a>
                    </div>
                    <div className={style.headerMenu__menuItem}>
                        <a href='/suggests'>
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3502168/a5d3df73-e8a2-4664-a24a-c14cb205f2d2/orig'
                                alt='media'
                            />
                            Предложение по улучшению
                        </a>
                    </div>
                    <div className={style.headerMenu__menuItem}>
                        <a href='/promo'>
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3756502/f4292471-f653-4ed9-883b-ebf4320d9382/orig'
                                alt='media'
                            />
                            Активация промокода
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};