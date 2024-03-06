import React, { useEffect, useRef, useState } from 'react';
import './HeaderMenu.scss';
import { Squash as Hamburger } from 'hamburger-react';
import { NavDropdown, Accordion } from 'react-bootstrap';

const HeaderMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const accordionRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                accordionRef.current &&
                !accordionRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuClick = () => {
        setOpen(!isOpen);
    };

    const handleDropdownItemClick = (event) => {
        event.stopPropagation();
    };

    const handleAccordionClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className='headerMenuDiv'>
            <NavDropdown
                title={
                    <div className='d-flex align-items-center' onClick={handleMenuClick}>
                        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                        <h5
                            ref={menuRef}
                            className='menu-word'
                        >
                            Меню
                        </h5>
                    </div>
                }
                id='dropdown-menu-align-end'
                align='end'
                show={isOpen}
            >
                <NavDropdown.Item href='/subControl' onClick={handleDropdownItemClick}>{
                    <img
                        src='https://avatars.mds.yandex.net/get-media-infra/3601332/25032996-f891-412d-8a16-afd878e1952e/orig'
                        alt='media'
                        className=''
                    />
                }
                    Управление подпиской</NavDropdown.Item>
                <br />
                <NavDropdown.Item href='/family' onClick={handleDropdownItemClick}>{
                    <img
                        src='https://avatars.mds.yandex.net/get-media-infra/3502168/0908f7d2-8827-4eab-adbb-1e48a07f1039/orig'
                        alt='media'
                        className=''
                    />
                }
                    Плюс для близких</NavDropdown.Item>
                <NavDropdown.Item href='/sharing' onClick={handleDropdownItemClick}>{
                    <img
                        src='https://avatars.mds.yandex.net/get-media-infra/3601332/7abe6ef7-b9b8-444e-b781-221c97cd52b9/orig'
                        alt='media'
                        className=''
                    />
                }
                    Подарить Плюс</NavDropdown.Item>
                <br />
                <Accordion ref={accordionRef} onClick={handleAccordionClick} className='Accordion'>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>{
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3502168/46bc2060-4e2c-4412-b12a-2349af48a2a0/orig'
                                alt='media'
                                className=''
                            />
                        }
                            Устройства по подписке</Accordion.Header>
                        <Accordion.Body>
                            <NavDropdown.Item
                                href='https://market.yandex.ru/product--yandex-stantsiia-2-umnaia-kolonka-s-alisoi/1488561450?cpa=1&sku=101763961821&offerid=Vlo_1Ses_qqnrC5SBuElog&utm_source=plus&utm_medium=menu_burger&utm_campaign=MSCAMP-24&utm_content=upmenu_ver3&clid=1650'
                            >Станция 2
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='https://market.yandex.ru/product--umnaia-kolonka-yandex-stantsiia-maks-s-zigbee/1792604739?sku=101951359744&utm_source=plus&utm_medium=menu_burger&utm_campaign=MSCAMP-24&utm_content=upmenu_ver3&clid=1650&skuId=101951359744&_redirectCount=1'
                            >Станция Макс
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='https://market.yandex.ru/product--umnaia-kolonka-yandex-novaia-stantsiia-mini-umnaia-kolonka-s-alisoi/1423994419?cpa=1&sku=101513067808&offerid=4OlXmoOtmqCzQkNflmPhBA&utm_source=plus&utm_medium=menu_burger&utm_campaign=MSCAMP-24&utm_content=upmenu_ver3&clid=1650'
                            >Станция Мини
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='https://market.yandex.ru/product--modul-s-yandex-tv-smart-tv-s-alisoi-4k/1423999414?cpa=1&sku=101512158786&offerid=iXyzTKFl0QSYSOCwb_UaIg&utm_source=plus&utm_medium=menu_burger&utm_campaign=MSCAMP-24&utm_content=upmenu_ver3&clid=1650'
                            >Модуль с Яндекс ТВ
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='https://market.yandex.ru/product--umnaia-kolonka-yandex-stantsiia-lait/962050067?cpa=1&sku=101514047734&offerid=BXknJtV4z81eaXGZ5d6fww&utm_source=plus&utm_medium=menu_burger&utm_campaign=MSCAMP-24&utm_content=upmenu_ver3&clid=1650'
                            >Станция Лайт
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href='https://market.yandex.ru/product--umnaia-kolonka-yandex-stantsiia-maks-s-zigbee/1792604739?glfilter=27421310%3A27421350_101951359744&glfilter=14871214%3A15772950_101882871741&cpa=1&sku=101951359744&utm_source=plus&utm_medium=menu_burger&utm_campaign=MSCAMP-24&utm_content=upmenu_ver3&clid=1650'
                            >Станция Макс с Zigbee™
                            </NavDropdown.Item>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1' className='Accordion'>
                        <Accordion.Header>{
                            <img
                                src='https://avatars.mds.yandex.net/get-media-infra/3601332/5f14d169-3c33-4214-92c7-acf11e72c7a8/orig'
                                alt='media'
                                className=''
                            />
                        }
                            Опции от партнеров</Accordion.Header>
                        <Accordion.Body>
                            <NavDropdown.Item href='/x5Club'>Покупки с Пакетом от X5</NavDropdown.Item>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <NavDropdown.Item href='/allOptions' onClick={handleDropdownItemClick}> {
                    <img
                        src='https://avatars.mds.yandex.net/get-media-infra/3737142/e04ad338-c8fc-459d-bfe1-3d01c4c9f099/orig'
                        alt='media'
                        className=''
                    />
                }
                    Все опции Плюса</NavDropdown.Item>
                <br />
                <NavDropdown.Item href='/support' onClick={handleDropdownItemClick}>{
                    <img
                        src='https://avatars.mds.yandex.net/get-media-infra/3756502/bca8cc02-c7a5-494d-b3a1-609af2469577/orig'
                        alt='media'
                        className=''
                    />
                }
                    Поддержка</NavDropdown.Item>
                <NavDropdown.Item href='/suggests' onClick={handleDropdownItemClick}>{
                    <img
                        src='https://avatars.mds.yandex.net/get-media-infra/3502168/a5d3df73-e8a2-4664-a24a-c14cb205f2d2/orig'
                        alt='media'
                        className=''
                    />
                }
                    Предложение по улучшению</NavDropdown.Item>
                <br />
                <NavDropdown.Item href='/promo' onClick={handleDropdownItemClick}>{
                    <img
                        src='https://avatars.mds.yandex.net/get-media-infra/3756502/f4292471-f653-4ed9-883b-ebf4320d9382/orig'
                        alt='media'
                        className=''
                    />
                }
                    Активация промокода</NavDropdown.Item>
            </NavDropdown>
        </div>
    );
};

export default HeaderMenu;