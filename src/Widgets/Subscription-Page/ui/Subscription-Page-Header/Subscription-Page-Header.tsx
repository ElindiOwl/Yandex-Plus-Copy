import './Subscription-Page-Header.scss'

const SubscriptionPageHeader = () => {
	return (
		<div className='topZoneSubControl'>
			<div className='yandexPlusTextSubControl'>
				<h2>Яндекс Плюс</h2>
				<svg fill='none' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='10' cy='10' fill='#0FBD6C' r='10'></circle>
					<path clipRule='evenodd' d='M14.316 6.935a.8.8 0 0 1 0 1.13l-5 5a.8.8 0 0 1-1.132 0l-2.5-2.5a.8.8 0 0 1 1.132-1.13l1.934 1.934 4.434-4.434a.8.8 0 0 1 1.132 0Z'
						fill='#fff'
						fillRule='evenodd'></path>
				</svg>
			</div>
			<div className='buttonDivSubControl'>
				<button className='stopSubButtonSubControl'>Приостановить подписку</button>
			</div>
		</div>
	)
}

export default SubscriptionPageHeader