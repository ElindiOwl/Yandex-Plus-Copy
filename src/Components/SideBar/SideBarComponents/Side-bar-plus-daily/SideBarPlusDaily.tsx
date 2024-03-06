import './SideBarPlusDaily.scss';

const SideBarPlusDaily = () => {
    return (
        <a className='pluslink'
           href='/Daily'>
            <div className='DailyplusBackground'>
                <div className='plusInside'>
                    <div className='dailyDiv'>
                        <h6 className='dailyText'>Плюс Дейли</h6>
                        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' width='10'
                             height='10'
                             className='dailySVG'
                             color='#000'>
                            <path fillRule='evenodd' clipRule='evenodd'
                                  d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
                                  fill='currentColor'></path>
                        </svg>
                        <div className='dailyforMobileText'>
                            <p>Вас ждуть подарки</p>
                        </div>
                    </div>
                </div>
                <div className='dailyImg'>
                </div>
            </div>
        </a>
    );
};

export default SideBarPlusDaily;