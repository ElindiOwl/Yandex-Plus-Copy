import './SideBarPlusPoints.scss';
import { Link } from 'react-router-dom';


const SideBarPlusPoints = () => {
	return (
		<div className='plusBackgroundPoints'>
			<Link className='pluslink'
				to='/Points'>
				<div className='plusInside'>
					<div className='pointsDiv'>
						<div className='pointsText'>
							<h6 className='plusPointsH6'>Баллы Плюса</h6>
							<svg className='plusSVGArrow' color='#000' fill='none' height='10'
								viewBox='0 0 24 24'
								width='10'
								xmlns='http://www.w3.org/2000/svg'>
								<path clipRule='evenodd'
									d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
									fill='currentColor'
									fillRule='evenodd'></path>
							</svg>
							<p className='plusPointsP'>1 балл = 1 ₽</p>
							<div className='Points'>
								<p className='pointsP'>23</p>
								<svg
									aria-hidden='true'
									className='pointsSVG' fill='#000'
									height='16'
									role='img' viewBox='0 0 28 28'
									width='16' xmlns='http://www.w3.org/2000/svg'><title>Баллы плюса</title>
									<circle cx='14' cy='14' fill='transparent' r='14'></circle>
									<path clipRule='evenodd'
										d='M15.12 22.4L17.85 14H28C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72599 26.525 4.10048 23.8995C1.47497 21.274 0 17.713 0 14C0 10.287 1.47497 6.72601 4.10048 4.1005C6.72599 1.475 10.287 0 14 0C15.4689 -8.76327e-06 16.9287 0.230691 18.326 0.683667L15.1364 10.5H5.81932L4.68068 14H14L11.27 22.4H15.12ZM18.9864 10.5L21.658 2.28201C24.5797 4.19098 26.684 7.12145 27.559 10.5H18.9864Z'
										fill='#000'
										fillRule='evenodd'></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default SideBarPlusPoints;