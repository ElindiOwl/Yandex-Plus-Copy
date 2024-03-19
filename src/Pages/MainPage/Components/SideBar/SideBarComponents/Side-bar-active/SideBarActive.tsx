import './SideBarActive.scss';
import portrait from '../../../assets/Icons/Island.png';

const sideBarActive = () => {
    return (
        <div className='plusBackgroundActive'>
            <a className='pluslink'
               href='/Subscription'>
                <div className='plusInside'>
                    <div className='linkDiv'>
                        <h6 className='plusActive'>Плюс <br />активен</h6>
                        <img className='plusImage' src={portrait} alt='portrait' />
                        <p className='plusText'>Управлять</p>
                        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' width='10'
                             height='10'
                             className='plusSVG'
                             color='#000'>
                            <path fillRule='evenodd' clipRule='evenodd'
                                  d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
                                  fill='currentColor'></path>
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default sideBarActive;