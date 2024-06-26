import { AccordionMap } from 'src/Shared/lib'

import style from './questions-map.module.scss'


export const questionsMap: AccordionMap = {
	'question1': {
		description:
            <p className={style.description}>В вашу подписку входят треки и подкасты на Яндекс Музыке, фильмы и сериалы
                на Кинопоиске, а ещё
                баллы Плюса. Баллы можно получать при заказах в <a
            	href='https://yandex.ru/support/plus-ru/cashback.html#services/'>сервисах Яндекса</a> и не только.
            </p>,
		header: <p className={style.header}>Что входит в мою подписку Яндекс Плюс?</p>,
	},
	'question2': {
		description:
            <p className={style.description}> Если коротко, то 1 балл = 1 ₽ скидки в сервисах Яндекса. Чтобы получать
                баллы, просто
                пользуйтесь сервисами как обычно:
            <br />
            <br />
                — заказывайте такси и доставку еды, катайтесь на самокатах, делайте покупки, бронируйте
                билеты и
                отели, пользуйтесь каршерингом
            <br />
                — проходите игру Плюс Сити и выполняйте задания в Плюс Дейли
            <br />
            <br />
                А ещё баллы можно получать с Яндекс Пэй, если выбрать Пэй как способ оплаты или платить
                картой
                Пэй.
            <br />
            <br />
                Обычно баллы начисляются от нескольких минут до нескольких дней. Узнать, сколько у вас
                баллов,
                можно в личном кабинете на <a
            	href='Pages/MainPage/Components/Main/MainComponents/QuestionsCard/QuestionsCard'>сайте
                    Плюса</a> или нажав на
                логотип Плюса в сервисах
                Яндекса.
            <br />
            <br />
                Подробнее о <a href='https://yandex.ru/support/plus-ru/cashback.html'>баллах Плюса</a>.
            </p>,
		header: <p className={style.header}>Что такое баллы Плюса, и как их получать?</p>,
	},
	'question3': {
		description:
            <p className={style.description}>Баллы можно тратить в сервисах Яндекса. Просто выбирайте «Списать баллы»
                при оформлении
                заказа в
                Яндекс Go, Путешествиях, Драйве, на Маркете, Кинопоиске, Яндекс Афише, Яндекс Заправках.
            <br />
            <br />
                Например, вы заказываете продукты в Лавке на 3000 ₽. У вас есть 1000 баллов Плюса — их можно
                потратить на оплату заказа. Вы получаете скидку 1000 ₽, а продукты обойдутся вам в 2000 ₽. А
                если у вас есть 3000 баллов, то их можно использовать почти полностью, с карты спишется
                только 1
                ₽.
            <br />
            <br />
                Если вы используете баллы при оплате заказа, то новые баллы за него не начислятся.
            <br />
            <a href='https://yandex.ru/support/plus-ru/cashback.html'>Подробнее про баллы</a>.
            </p>,
		header: <p className={style.header}>Где и как тратить баллы Плюса?</p>,
	},
	'question4': {
		description:
            <p className={style.description}> Есть 2 способа:
            	<br />
            	<br />
                — оформите карту Пэй и расплачивайтесь ею онлайн и офлайн. Подробнее <a
            		href='Pages/MainPage/Components/Main/MainComponents/QuestionsCard/QuestionsCard'>о карте
                    Пэй</a>
            	<br />
                — скачайте и установите приложение Яндекс Пэй на свой телефон. Оплачивайте покупки
            	<br />
                любыми картами онлайн, выбрав способом оплаты Яндекс Пэй. Ищите кнопку Пэй на сайтах
                партнёров.
                Подробнее <a
            		href='Pages/MainPage/Components/Main/MainComponents/QuestionsCard/QuestionsCard'>о Яндекс
                    Пэй</a>.
            </p>,
		header: <p className={style.header}>Как получать дополнительный кешбэк баллами с Яндекс Пэй?</p>,
	},
	'question5': {
		description:
            <p className={style.description}> Если вам пока не нужен Плюс, подписку можно отменить или приостановить.
            	<br />
            	<b>Про приостановку</b>
            	<br />
                Приостановка — это остановка подписки на время, как в фитнес-клубе. Например, вы можете
                приостановить Плюс, если уезжаете в отпуск. Все неистраченные дни сохранятся, а возобновить
                подписку можно в любой момент.
            	<br />
                Чтобы приостановить подписку, зайдите в <a
            		href='Pages/MainPage/Components/Main/MainComponents/QuestionsCard/QuestionsCard'>личный
                    кабинет</a>, выберите нужный
                тариф. Нажмите
                «Приостановить». Обычно приостановить Плюс можно на 7 дней, но срок бывает больше в рамках
                персонального предложения до 31.12.2024. Подробнее в пункте 2.17 <a
            		href='Pages/MainPage/Components/Main/MainComponents/QuestionsCard/QuestionsCard'>Условий
                    подписки</a>.
            	<br />
            	<b>Про отмену</b>
            	<br />
                Чтобы отключить Плюс, выберите «Отменить подписку» и подтвердите отмену. Подписка
                отключится, но
                вы сможете пользоваться Плюсом до конца оплаченного периода.
            	<br />
                Если вы отмените подписку во время пробного периода, Плюс может отключиться раньше срока.
                Например, если у вас был пробный период на 3 месяца, то при отключении он может
            	<br />
                сократиться до конца текущего месяца.
            	<br />
                Если вы подключали Плюс через своего мобильного оператора, App Store или Google Play, а
                потом
                решили отменить подписку, то она перестанет работать в тот же день.
            </p>,
		header: <p className={style.header}>Как отменить подписку? И можно ли остановить её на время?</p>,
	},
	'question6': {
		description:
            <p className={style.description}> Убедитесь, что вы заходите в сервисы Яндекса (Кинопоиск, Музыка, Яндекс Go
                и другие)
            <br />
                с тем же логином, на который оформлена подписка.
            <br />
                Если вы не помните логин или пароль своего аккаунта, воспользуйтесь рекомендациями
            <br />
                в <a href='https://yandex.ru/support/id/feedback.html'>Справке Яндекс ID</a>. Если аккаунт
                верный, но Плюс все равно не работает,
                попробуйте выйти из своего
                аккаунта и войти снова.
            </p>,
		header: <p className={style.header}>У меня списались деньги, но преимущества Плюса недоступны. Что делать?</p>,
	},
	'question7': {
		description:
            <p className={style.description}> Подключите Яндекс Плюс Больше кино на год — так получится дешевле, чем при
                ежемесячной
                оплате, а
                ещё можно не думать об оплате каждый месяц. Яндекс Плюс Больше кино — это тот же Плюс,
                только с
                доступом к коллекции фильмов и сериалов more.tv и viju, а также с фильмовыми телеканалами.
            </p>,
		header: <p className={style.header}>Как выгоднее всего купить подписку?</p>,
	},
	'question8': {
		description:
            <p className={style.description}> В Плюс Дейли вы получаете подарки за то, что пользуетесь сервисами
                Яндекса.
            <br />
                Как это работает: получаете звездочки за действия в сервисах, набираете их нужное количество
                и
                забираете подарок. И дальше — за новым подарком.
            <br />
                А если выполнять задания недели, можно получать больше звездочек и другие награды.
            </p>,
		header: <p className={style.header}>Что такое Плюс Дейли и как туда попасть?</p>,
	},
	'question9': {
		description:
            <p className={style.description}> Плюс Сити — это игра для мобильных устройств на базе <a
            	href='https://apps.apple.com/ru/app/%D0%BF%D0%BB%D1%8E%D1%81-%D1%81%D0%B8%D1%82%D0%B8-%D1%81%D0%B8%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0/id1621479286#services'>
                iOS</a> и <a
            	href='https://play.google.com/store/apps/details?id=com.yandex.mobile.plus.game.city&hl=ru&gl=US&pli=1#services'>
                Android</a>.
                В ней вы строите
                виртуальный
                город, выполняете задания в сервисах Яндекса и играете в мини-игры.
            <br />
                За достижения в игре можно получать баллы Плюса. Баллы можно тратить на покупки и
                развлечения в <a href='https://yandex.ru/support/plus-ru/cashback.html#services'>сервисах
                    Яндекса</a>.
            </p>,
		header: <p className={style.header}>Что такое Плюс Сити?</p>,
	},
}