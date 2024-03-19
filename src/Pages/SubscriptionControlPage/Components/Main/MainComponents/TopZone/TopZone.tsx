import './TopZone.scss';

const TopZone = () => {
    return (
        <div className='topZoneSubControl'>
            <div className='yandexPlusTextSubControl'>
                <h2>Яндекс Плюс</h2>
                <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
                    <circle cx='10' cy='10' r='10' fill='#0FBD6C'></circle>
                    <path fillRule='evenodd' clipRule='evenodd'
                          d='M14.316 6.935a.8.8 0 0 1 0 1.13l-5 5a.8.8 0 0 1-1.132 0l-2.5-2.5a.8.8 0 0 1 1.132-1.13l1.934 1.934 4.434-4.434a.8.8 0 0 1 1.132 0Z'
                          fill='#fff'></path>
                </svg>
            </div>
            <div className='blankDivTopZoneSubDiv'>

            </div>
            <div className='buttonDivSubControl'>
                <button className='stopSubButtonSubControl'>Приостановить подписку</button>
            </div>
        </div>
    );
};

export default TopZone;