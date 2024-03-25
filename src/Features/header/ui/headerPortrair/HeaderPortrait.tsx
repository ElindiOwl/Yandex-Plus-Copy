import './HeaderPortrait.scss';
import portrait from '../../../../Shared/assets/Icons/Island.png';
import { useMenu } from 'src/Shared/lib/useMenu';


export const HeaderPortrait = () => {
    const { isMenuOpen, toggleMenu, menuRef } = useMenu();

    return (
        <>
            <div className='headerPortraitDiv' ref={menuRef}>
                <div className={`dropdown ${isMenuOpen ? 'show' : ''}`}>
                    <button className='portraitButton' type='button' id='dropdownMenuButton' onClick={toggleMenu}>
                        <img src={portrait} height='100%' width='45' alt='Portrait' />
                    </button>
                    <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`} aria-labelledby='dropdownMenuButton'>
                        <div>
                            <div className='Header'>
                                <div className='headerPanel d-flex justify-content-between'>
                                    <div className='Header-Side'>
                                        <a href='Pages/MainPage/Components/Header/HeaderPortrair/HeaderPortrait'
                                           target='_parent'>
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
                                    <div className='exitButton' onClick={toggleMenu}>
                                        <button type='button' color='black'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                                 focusable='false'
                                                 aria-hidden='true' className='SvgIcon'>
                                                <path fillRule='evenodd' clipRule='evenodd'
                                                      d='M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z'
                                                      fill='currentColor'></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='headerContent d-flex flex-column align-items-center'>
                                    <a href='Pages/MainPage/Components/Header/HeaderPortrair/HeaderPortrait'>
                                        <img src={portrait} height='100%' width='50'
                                             className='d-inline-block align-top'
                                             alt='Logo' />
                                    </a>
                                    <h5 className=''>UserName</h5>
                                    <p className=''>username</p>
                                </div>
                            </div>
                            <div className='headerPortraitBottomButtons'>
                                <a href='https://passport.yandex.ru/auth?origin=plus&mode=add-user&retpath=https%3A%2F%2Fplus.yandex.ru%2F%3Fncrnd%3D24994'
                                   className='dropdown-item'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' focusable='false'
                                         aria-hidden='true' className='SvgIcon'>
                                        <path fillRule='evenodd' clipRule='evenodd'
                                              d='M1.707 17.704c1.12-1.12 2.853-1.7 5.256-1.707.274-.704.62-1.377.985-1.972A15.707 15.707 0 0 0 7 13.997c-2.912 0-5.165.751-6.707 2.293a1 1 0 1 0 1.414 1.414zm5.294-4.907c-2.63 0-4.501-2.692-4.501-5.83 0-2.97 1.596-4.97 4.501-4.97 2.905 0 4.499 2 4.499 4.97 0 3.138-1.87 5.83-4.499 5.83zm0-2c1.307 0 2.499-1.596 2.499-3.83 0-2.009-.84-2.97-2.499-2.97-1.66 0-2.501.962-2.501 2.97 0 2.234 1.194 3.83 2.501 3.83zM17 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm7-3.5a1 1 0 0 0-1 1V16h-1.5a1 1 0 1 0 0 2H16v1.5a1 1 0 1 0 2 0V18h1.5a1 1 0 1 0 0-2H18v-1.5a1 1 0 0 0-1-1z'
                                              fill='currentColor'></path>
                                    </svg>
                                    Добавить аккаунт
                                </a>
                                <a href='/promo' className='dropdown-item'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' focusable='false'
                                         aria-hidden='true' className='SvgIcon'>
                                        <path fillRule='evenodd' clipRule='evenodd'
                                              d='M21.593 10.943c.584.585.584 1.53 0 2.116L18.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.552 9.552 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H8.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.562 9.562 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.883 2.893zM14 16a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.505a1 1 0 1 0 2 0V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h7a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 0-1-1z'
                                              fill='currentColor'></path>
                                    </svg>
                                    Выйти
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};