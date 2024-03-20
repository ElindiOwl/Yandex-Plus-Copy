import './SubControlHistoryPage.scss';
import Header from '../../../../../../../../../Shared/Header/Header';
import Footer from '../../../../../../../../../Shared/Footer/Footer';
import PaymentsHistoryMap from './PaymentHistoryMap/PaymentsHistoryMap';

const SubControlHistoryPage = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            <Header isScrollableStyle={false} />
            <div className='subControlHistoryPageContent'>
                <button onClick={goBack}>
                    <svg viewBox='0 0 22 24' fill='none' xmlns='http://www.w3.org/2000/svg' width='16' height='16'
                         color='currentColor'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M15.566 4.434a.8.8 0 0 1 0 1.13L9.13 12l6.435 6.434a.8.8 0 1 1-1.132 1.132l-7-7a.8.8 0 0 1 0-1.131l7-7a.8.8 0 0 1 1.132 0Z'
                              fill='currentColor'></path>
                    </svg>
                    <p>Назад</p>
                </button>
                <div className='subControlHistoryPageText'>
                    <h2>История списаний</h2>
                    <p>Тут вся информация за последние полгода. Списания за всё время — <br />
                        <a href='https://id.yandex.ru/pay/history?alias=plus'>в Яндекс ID</a>
                    </p>
                </div>
                <div className='subControlHistoryMapDiv'>
                    <PaymentsHistoryMap />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SubControlHistoryPage;