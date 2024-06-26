import './SideBarCashBack.scss';
import React, { Dispatch, SetStateAction, useState } from 'react';
import 'src/Widgets/Home-Page/ui/Home-Page-SideBar/SideBarComponents/Side-bar-cashback/SideBarCashBackModal/SideBarCashBackModal.scss';
import SideBarCashBackModal
	from 'src/Widgets/Home-Page/ui/Home-Page-SideBar/SideBarComponents/Side-bar-cashback/SideBarCashBackModal/SideBarCashBackModal.tsx';
import { Link } from 'react-router-dom';

interface SideBarCashBackProps {
    setParentZIndex: Dispatch<SetStateAction<string>>;
}

const SideBarCashBack: React.FC<SideBarCashBackProps> = ({ setParentZIndex }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!modalVisible);
		setParentZIndex(modalVisible ? 'auto' : '1000');
	};

	return (
		<>
			<div className='plusBackgroundCashBack'>
				<Link className='pluslink' to='' onClick={toggleModal}>
					<div className='plusInside'>
						<div className='mainDiv'>
							<h6 className='plusCashBack'>Кэшбэк<br />на февраль</h6>
							<svg className='plusSVGCashBack' color='#000' fill='none' height='10'
								viewBox='0 0 24 24'
								width='10'
								xmlns='http://www.w3.org/2000/svg'>
								<path clipRule='evenodd'
									d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
									fill='currentColor'
									fillRule='evenodd'></path>
							</svg>
						</div>
						<div className='activateDiv'>
							<p className='activateDivText'>Активировать</p>
						</div>
					</div>
				</Link>
			</div>

			{modalVisible && <SideBarCashBackModal onClose={toggleModal} />}
		</>
	);
};

export default SideBarCashBack;