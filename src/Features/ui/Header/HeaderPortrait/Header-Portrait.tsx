import './Header-Portrait.scss'
import { useMenu } from 'src/Shared/lib/useMenu'
import { DropDownMenuItem } from 'src/Shared/ui/DropDown-Menu/DropDown-Menu-Item/DropDown-Menu-Item.tsx'

import portrait from '/src/Shared/assets/Icons/Island.png'
import account from '/src/Shared/assets/Icons/account.png'
import exit from '/src/Shared/assets/Icons/exit.png'


export const HeaderPortrait = () => {
	const { isMenuOpen, toggleMenu, menuRef } = useMenu()

	return (
		<>
			<div ref={menuRef} className='headerPortraitDiv'>
				<div className={`dropdown ${isMenuOpen ? 'show' : ''}`}>
					<button className='portraitButton' id='dropdownMenuButton' onClick={toggleMenu}>
						<img alt='Portrait' src={portrait} />
					</button>
					<div aria-labelledby='dropdownMenuButton' className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
						<div>
							<div className='Header'>
								<div className='headerPanel'>
									<div className='Header-Side'>
										<a href=''>
											<svg aria-hidden='true' className='logo_root__U0pum' focusable='false'
												height='20' viewBox='0 0 62 30' width='41'>
												<circle cx='15' cy='14.9998' fill='#fc3f1d' r='15'></circle>
												<path
													d='M17.2116 8.40037H15.6936C13.0912 8.40037 11.7899 9.70158 11.7899 11.6534C11.7899 13.8221 12.6574 14.9064 14.6092 16.2076L16.1273 17.2919L11.7899 24.0148H8.32007L12.4405 17.9425C10.055 16.2076 8.7538 14.6895 8.7538 11.8703C8.7538 8.40037 11.1393 6.01483 15.6936 6.01483H20.2478V24.0148H17.2116V8.40037Z'
													fill='#fff'></path>
												<path clipRule='evenodd' d='M47 29.9995C59.0033 29.9995 62 27.0028 62 14.9995C62 2.99623 59.0033 -0.000488281 47 -0.000488281C34.9967 -0.000488281 32 2.99623 32 14.9995C32 27.0028 34.9967 29.9995 47 29.9995ZM41.8793 5.99942V23.9994H38.7499V5.99942H41.8793ZM48.9153 5.99942C50.1024 5.99942 51.2031 6.1505 52.2175 6.47424C53.2319 6.7764 54.0952 7.29438 54.829 7.98503C55.5628 8.67568 56.1455 9.60374 56.5556 10.726C56.9873 11.8483 57.1815 13.2512 57.1815 14.9131C57.1815 16.3807 56.9657 17.6757 56.5556 18.8196C56.124 19.9419 55.5412 20.8915 54.7858 21.6685C54.0304 22.4455 53.124 23.0282 52.088 23.4167C51.052 23.8052 49.8865 24.021 48.6563 24.021H44.7067V5.99942H48.9153ZM48.3973 21.5606C49.2391 21.5606 50.016 21.4095 50.7067 21.1289C51.3973 20.8483 51.9801 20.4167 52.4765 19.8771C52.9729 19.316 53.3398 18.6253 53.6204 17.7836C53.8793 16.9419 54.0304 15.9706 54.0304 14.8483C54.0304 13.6397 53.9009 12.6253 53.6419 11.8052C53.3829 10.985 53.016 10.316 52.5412 9.81956C52.0664 9.32316 51.5052 8.95625 50.8362 8.74043C50.1887 8.5246 49.4549 8.41669 48.6563 8.41669H47.8362V21.539H48.3973V21.5606Z'
													fill='Black'
													fillRule='evenodd'></path>
											</svg>
										</a>
									</div>
									<div className='exitButton' onClick={toggleMenu}>
										<button>
											<svg aria-hidden='true' className='SvgIcon' fill='none' focusable='false'
												height='24'
												viewBox='0 0 24 24' width='24'>
												<path clipRule='evenodd' d='M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z'
													fill='currentColor'
													fillRule='evenodd'></path>
											</svg>
										</button>
									</div>
								</div>
								<div className='headerContent'>
									<a href=''>
										<img alt='Logo' src={portrait} />
									</a>
									<h5 className=''>UserName</h5>
									<p className=''>username</p>
								</div>
							</div>
							<div className='headerPortraitBottomButtons'>
								<DropDownMenuItem description={'Добавить аккаунт'} image={account}
									link={'/account'} optionalClassName={'dropDownItem'} />
								<DropDownMenuItem description={'Выйти'} image={exit}
									link={'/exit'} optionalClassName={'dropDownItem'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}