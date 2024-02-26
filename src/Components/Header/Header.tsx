import { Navbar, Container, NavDropdown, Nav, Accordion } from 'react-bootstrap';
/*import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';*/
import logo from '../../assets/Icons/Logo.png';
import portrait from '../../assets/Icons/Island.png';
import './Header.scss';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState, useEffect, useRef } from 'react';

/*import AllOptions from '/src/Pages/AllOptions';
import Devices from '/src/Pages/Devices';
import Family from '/src/Pages/Family';
import PartnerOptions from '/src/Pages/PartnerOptions';
import Promo from '/src/Pages/Promo';
import Sharing from '/src/Pages/Sharing';
import SubControl from '/src/Pages/SubControl';
import Suggests from '/src/Pages/Suggests';
import Support from '/src/Pages/Support';*/

function Header() {
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

    const handleAccordionClick = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} height='100%' width='150' className='d-inline-block align-top' alt='Logo' />
                    </Navbar.Brand>
                    <Nav className='ml-auto'>
                        <NavDropdown
                            title={
                                <div className='d-flex align-items-center'>
                                    <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                                    <h5
                                        ref={menuRef}
                                        className='menu-word'
                                        onClick={handleMenuClick}>Меню</h5>
                                </div>
                            }
                            id='dropdown-menu-align-end'
                            align='end'
                            show={isOpen}
                        >
                            <NavDropdown.Item href='/subControl'>{
                                <img
                                    src='https://avatars.mds.yandex.net/get-media-infra/3601332/25032996-f891-412d-8a16-afd878e1952e/orig'
                                    alt='media'
                                    className=''
                                />
                            }
                                Управление подпиской</NavDropdown.Item>
                            <br />
                            <NavDropdown.Item href='/family'>{
                                <img
                                    src='https://avatars.mds.yandex.net/get-media-infra/3502168/0908f7d2-8827-4eab-adbb-1e48a07f1039/orig'
                                    alt='media'
                                    className=''
                                />
                            }
                                Плюс для близких</NavDropdown.Item>
                            <NavDropdown.Item href='/sharing'>{
                                <img
                                    src='https://avatars.mds.yandex.net/get-media-infra/3601332/7abe6ef7-b9b8-444e-b781-221c97cd52b9/orig'
                                    alt='media'
                                    className=''
                                />
                            }
                                Подарить Плюс</NavDropdown.Item>
                            <br />
                            <Accordion ref={accordionRef} onClick={handleAccordionClick} class='Accordion'>
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
                                <Accordion.Item eventKey='1'>
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
                            <NavDropdown.Item href='/allOptions'>{
                                <img
                                    src='https://avatars.mds.yandex.net/get-media-infra/3737142/e04ad338-c8fc-459d-bfe1-3d01c4c9f099/orig'
                                    alt='media'
                                    className=''
                                />
                            }
                                Все опции Плюса</NavDropdown.Item>
                            <br />
                            <NavDropdown.Item href='/support'>{
                                <img
                                    src='https://avatars.mds.yandex.net/get-media-infra/3756502/bca8cc02-c7a5-494d-b3a1-609af2469577/orig'
                                    alt='media'
                                    className=''
                                />
                            }
                                Поддержка</NavDropdown.Item>
                            <NavDropdown.Item href='/suggests'>{
                                <img
                                    src='https://avatars.mds.yandex.net/get-media-infra/3502168/a5d3df73-e8a2-4664-a24a-c14cb205f2d2/orig'
                                    alt='media'
                                    className=''
                                />
                            }
                                Предложение по улучшению</NavDropdown.Item>
                            <br />
                            <NavDropdown.Item href='/promo'>{
                                <img
                                    src='https://avatars.mds.yandex.net/get-media-infra/3756502/f4292471-f653-4ed9-883b-ebf4320d9382/orig'
                                    alt='media'
                                    className=''
                                />
                            }
                                Активация промокода</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<img src={portrait} height='100%' width='50' alt='Portrait' />}
                                     id='dropdown-menu-align-end'
                                     align='end'
                        >
                            <div>
                                <div className='Header'>
                                    <div className='Header-Panel d-flex justify-content-between'>
                                        <div className='Header-Side'>
                                            <a aria-label='Яндекс ID' data-testid='yandex-id' tabIndex='0'
                                               className='link_root__kxlxu Logo_root__dpGHt Logo_desktop__u8wTu'
                                               href='https://id.yandex.ru/' target='_parent'>
                                                <svg aria-hidden='true' className='logo_root__U0pum' focusable='false'
                                                     height='20' viewBox='0 0 62 30' width='41'>
                                                    <circle cx='15' cy='14.9998' r='15' fill='#fc3f1d'></circle>
                                                    <path
                                                        d='M17.2116 8.40037H15.6936C13.0912 8.40037 11.7899 9.70158 11.7899 11.6534C11.7899 13.8221 12.6574 14.9064 14.6092 16.2076L16.1273 17.2919L11.7899 24.0148H8.32007L12.4405 17.9425C10.055 16.2076 8.7538 14.6895 8.7538 11.8703C8.7538 8.40037 11.1393 6.01483 15.6936 6.01483H20.2478V24.0148H17.2116V8.40037Z'
                                                        fill='#fff'></path>
                                                    <path fillRule='evenodd' clipRule='evenodd'
                                                          d='M47 29.9995C59.0033 29.9995 62 27.0028 62 14.9995C62 2.99623 59.0033 -0.000488281 47 -0.000488281C34.9967 -0.000488281 32 2.99623 32 14.9995C32 27.0028 34.9967 29.9995 47 29.9995ZM41.8793 5.99942V23.9994H38.7499V5.99942H41.8793ZM48.9153 5.99942C50.1024 5.99942 51.2031 6.1505 52.2175 6.47424C53.2319 6.7764 54.0952 7.29438 54.829 7.98503C55.5628 8.67568 56.1455 9.60374 56.5556 10.726C56.9873 11.8483 57.1815 13.2512 57.1815 14.9131C57.1815 16.3807 56.9657 17.6757 56.5556 18.8196C56.124 19.9419 55.5412 20.8915 54.7858 21.6685C54.0304 22.4455 53.124 23.0282 52.088 23.4167C51.052 23.8052 49.8865 24.021 48.6563 24.021H44.7067V5.99942H48.9153ZM48.3973 21.5606C49.2391 21.5606 50.016 21.4095 50.7067 21.1289C51.3973 20.8483 51.9801 20.4167 52.4765 19.8771C52.9729 19.316 53.3398 18.6253 53.6204 17.7836C53.8793 16.9419 54.0304 15.9706 54.0304 14.8483C54.0304 13.6397 53.9009 12.6253 53.6419 11.8052C53.3829 10.985 53.016 10.316 52.5412 9.81956C52.0664 9.32316 51.5052 8.95625 50.8362 8.74043C50.1887 8.5246 49.4549 8.41669 48.6563 8.41669H47.8362V21.539H48.3973V21.5606Z'
                                                          fill='Black'></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <button type='button' aria-label='Закрыть' data-testid='close'
                                                    className='Button_root__DYZh1 Button_root_withoutGap__yevOR _shape_root__Vq_6i _size_root__Tg5NZ _variant_root__RPR04 Header-Button'>
                                                <div className='SvgIconWrap' data-svg='Close'>
                                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                                         focusable='false' aria-hidden='true' className='SvgIcon'>
                                                        <path fillRule='evenodd' clipRule='evenodd'
                                                              d='M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z'
                                                              fill='currentColor'></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='Header-Content d-flex flex-column align-items-center'>
                                        <a href='https://id.yandex.ru/'
                                        >
                                            {
                                                <img src={portrait}
                                                     height='100%'
                                                     width='60'
                                                     className='d-inline-block align-top'
                                                     alt='Logo'
                                                />
                                            }
                                        </a>
                                        <h5 className=''>UserName</h5>
                                        <p className=''>username</p>
                                    </div>
                                </div>
                                <div>
                                    <NavDropdown.Item
                                        href='https://passport.yandex.ru/auth?origin=plus&mode=add-user&retpath=https%3A%2F%2Fplus.yandex.ru%2F%3Fncrnd%3D24994'>{
                                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' focusable='false'
                                             aria-hidden='true' className='SvgIcon'>
                                            <path fillRule='evenodd' clipRule='evenodd'
                                                  d='M1.707 17.704c1.12-1.12 2.853-1.7 5.256-1.707.274-.704.62-1.377.985-1.972A15.707 15.707 0 0 0 7 13.997c-2.912 0-5.165.751-6.707 2.293a1 1 0 1 0 1.414 1.414zm5.294-4.907c-2.63 0-4.501-2.692-4.501-5.83 0-2.97 1.596-4.97 4.501-4.97 2.905 0 4.499 2 4.499 4.97 0 3.138-1.87 5.83-4.499 5.83zm0-2c1.307 0 2.499-1.596 2.499-3.83 0-2.009-.84-2.97-2.499-2.97-1.66 0-2.501.962-2.501 2.97 0 2.234 1.194 3.83 2.501 3.83zM17 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm7-3.5a1 1 0 0 0-1 1V16h-1.5a1 1 0 1 0 0 2H16v1.5a1 1 0 1 0 2 0V18h1.5a1 1 0 1 0 0-2H18v-1.5a1 1 0 0 0-1-1z'
                                                  fill='currentColor'></path>
                                        </svg>
                                    }
                                        Добавить аккаунт</NavDropdown.Item>
                                    <NavDropdown.Item href='/promo'>{
                                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' focusable='false'
                                             aria-hidden='true' className='SvgIcon'>
                                            <path fillRule='evenodd' clipRule='evenodd'
                                                  d='M21.593 10.943c.584.585.584 1.53 0 2.116L18.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.552 9.552 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H8.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.562 9.562 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.883 2.893zM14 16a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.505a1 1 0 1 0 2 0V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h7a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 0-1-1z'
                                                  fill='currentColor'></path>
                                        </svg>
                                    }
                                        Выйти</NavDropdown.Item>
                                </div>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            {/*            <Router>
                <Switch>
                    <Route path='/subControl'>
                        <SubControl />
                    </Route>
                    <Route path='/family'>
                        <Family />
                    </Route>
                    <Route path='/sharing'>
                        <Sharing />
                    </Route>
                    <Route path='/devices'>
                        <Devices />
                    </Route>
                    <Route path='/partnerOptions'>
                        <PartnerOptions />
                    </Route>
                    <Route path='/allOptions'>
                        <AllOptions />
                    </Route>
                    <Route path='/support'>
                        <Support />
                    </Route>
                    <Route path='/suggests'>
                        <Suggests />
                    </Route>
                    <Route path='/promo'>
                        <Promo />
                    </Route>
                </Switch>
            </Router>*/}
        </>
    );
}

export default Header;