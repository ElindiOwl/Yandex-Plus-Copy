import './SideBarActive.scss'
import portrait from '../../../../../../Shared/assets/Icons/Island.png'

const sideBarActive = () => {
	return (
		<div className='plusBackgroundActive'>
			<a className='pluslink'
				href='/subControl'>
				<div className='plusInside'>
					<div className='linkDiv'>
						<h6 className='plusActive'>Плюс <br />активен</h6>
						<img alt='portrait' className='plusImage' src={portrait} />
						<p className='plusText'>Управлять</p>
						<svg className='plusSVG' color='#000' fill='none' height='10'
							viewBox='0 0 24 24'
							width='10'
							xmlns='http://www.w3.org/2000/svg'>
							<path clipRule='evenodd' d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
								fill='currentColor'
								fillRule='evenodd'></path>
						</svg>
					</div>
				</div>
			</a>
		</div>
	)
}

export default sideBarActive