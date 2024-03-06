import './Footer.scss';

const Footer = () => {
    return (
        <div className='footerDiv'>
            <div className='footerLinks'>
                <a href='https://yandex.ru/legal/yandex_plus_conditions/?ncrnd=1016'>Условия подписки</a>
                <a href='https://yandex.ru/legal/yandex_plus_privilege_list/?ncrnd=1016'>Условия привилегий</a>
                <a href='https://yandex.ru/legal/plus_loyalty/?ncrnd=1016'>Условия кешбэка</a>
                <a href='https://yandex.ru/support/plus-ru/?ncrnd=1016'>Справка</a>
                <a href='https://plus.yandex.ru/action/business?ncrnd=1016'>Плюс для бизнеса</a>
                <a href='https://plus.yandex.ru/?message=legal&ncrnd=1016'>Новости сервиса</a>
                <a href='https://yandex.ru/legal/recommendations/?ncrnd=1016#index__plus'>Правила рекомендаций</a>
            </div>
            <br />
            <p>© 2018–2024 ООО «<a href='https://ya.ru/'>Яндекс</a>» 18+</p>
            <p>Проект компании <a href='https://yandex.ru/all?ncrnd=1016'>Яндекс</a>, воссозданный в некомерческих целях
            </p>
        </div>
    );
};

export default Footer;
