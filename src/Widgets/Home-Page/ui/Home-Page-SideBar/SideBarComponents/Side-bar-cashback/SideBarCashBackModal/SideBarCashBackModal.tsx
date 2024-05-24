import './SideBarCashBackModal.scss'
import React from 'react'

interface SideBarCashBackModalProps {
    onClose: () => void;
}

const SideBarCashBackModal: React.FC<SideBarCashBackModalProps> = ({ onClose }) => {

	return (
		<>
			<div className='modalCashBack'>
				<div className='overlay' onClick={onClose}></div>
				<div className='modalContentSideBarCashBack'>
					<div className='modalContentTextSideBarCashBack'>
						<h2>Активируйте 1% во всех тарифах такси и 5% у
                            партнёров</h2>
						<p>Весь март платите любыми картами и получайте
                            дополнительные
                            баллы
                            Плюса от Яндекс Пэй:
						<br /><br />
                            • 1% за поездки в любом тарифе Яндекс Go
						<br /><br />
                            • 1% за все покупки в сервисах Яндекса
						<br /><br />
                            • 5% — за оплату кнопкой Пэй на сайтах магазинов и сервисов
						<br />
						</p>
						<a href='Pages/MainPage/Components/SideBar/SideBarComponents/Side-bar-cashback/SideBarCashBackModal/SideBarCashBackModal'>Условия
                            акции</a>
					</div>
					<div className='blankForBgImage'></div>
					<button className='modalContentBottomButtonSideBarCashBack'>Активировать</button>
					<button className='close-modal' onClick={onClose}>
						<svg aria-hidden='true' className='SvgIcon' fill='none' focusable='false' height='20'
							preserveAspectRatio='none' viewBox='5 -5 14 34' width='20' xmlns='http://www.w3.org/2000/svg'>
							<path clipRule='evenodd' d='M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z'
								fill='currentColor'
								fillRule='evenodd'></path>
						</svg>
					</button>
				</div>
			</div>
		</>
	)
}

export default SideBarCashBackModal