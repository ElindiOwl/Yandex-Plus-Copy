import style from './footer-Links.module.scss';

export const FooterLinks = () => {
    return (
        <div className={style.footerLinks}>
            <a href='Pages/MainPage/Components/Footer/Footer?ncrnd=1016'>Условия подписки</a>
            <a href='Pages/MainPage/Components/Footer/Footer?ncrnd=1016'>Условия привилегий</a>
            <a href='Pages/MainPage/Components/Footer/Footer?ncrnd=1016'>Условия кешбэка</a>
            <a href='Pages/MainPage/Components/Footer/Footer?ncrnd=1016'>Справка</a>
            <a href='https://plus.yandex.ru/action/business?ncrnd=1016'>Плюс для бизнеса</a>
            <a href='Pages/MainPage/Components/Footer/Footer?message=legal&ncrnd=1016'>Новости сервиса</a>
            <a href='Pages/MainPage/Components/Footer/Footer?ncrnd=1016#index__plus'>Правила рекомендаций</a>
        </div>
    );
};