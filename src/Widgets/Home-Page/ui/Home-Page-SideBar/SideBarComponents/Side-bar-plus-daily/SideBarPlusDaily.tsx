import './SideBarPlusDaily.scss';
import gift from 'src/Shared/assets/Images/Home-Page-Side-Bar/Side-Bar-Images/Precent.png';
import { Link } from 'react-router-dom';

const SideBarPlusDaily = () => {
	return (
		<Link className='pluslink'
			to='/Daily'>
			<div className='DailyplusBackground'>
				<div className='plusInside'>
					<div className='dailyDiv'>
						<h6 className='dailyText'>Плюс Дейли</h6>
						<svg className='dailySVG' color='#000' fill='none' height='10'
							viewBox='0 0 24 24'
							width='10'
							xmlns='http://www.w3.org/2000/svg'>
							<path clipRule='evenodd'
								d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
								fill='currentColor'
								fillRule='evenodd'></path>
						</svg>
						<div className='dailyforMobileText'>
							<p>Вас ждут подарки</p>
						</div>
					</div>
				</div>
				<div className='dailyImg'>
					<img alt='подарок' src={gift} />
				</div>
			</div>
		</Link>
	);
};

export default SideBarPlusDaily;