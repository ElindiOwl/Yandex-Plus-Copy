import planet from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Planet.png'
import kognata from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Kognata.png'
import oscar from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Oscar.png'
import loveLanguage from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/LoveLanguage.png'
import kvizes from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Kvizes.png'
import fantasyFinal from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/FantasyFinal.png'
import dailyDragon from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/DailyDragon.png'
import kombinator from 'src/Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/KombinatorGame.png'

import { CardSliderTemplate } from '../../model/CardSliderTemplate'

export const NewInPlusDataDTO: CardSliderTemplate[] = [
	{
		sliderDescription: 'Найдите Артефакты в сервисах Яндекса и выиграйте приз',
		sliderHeader: 'Вокруг Плюса за 10 дней',
		src: planet,
	},
	{
		sliderDescription: 'Слушайте аудиосериал от автора «Петровых в гриппе»',
		sliderHeader: '«Когната» в Букмейте',
		src: kognata,
	},
	{
		sliderDescription: 'Угадайте победителей «Оскара»',
		sliderHeader: 'Игра с призами от Кинопоиска',
		src: oscar,
	},
	{
		sliderDescription: '10 принципов общения с любым человеком',
		sliderHeader: 'Прочитайте «Язык любви»',
		src: loveLanguage,
	},
	{
		sliderDescription: 'Собирайте компанию и играйте все вместе',
		sliderHeader: 'Квизы на Кинопоиске',
		src: kvizes,
	},
	{
		sliderDescription: 'Читайте все 6 томов «Благословения Небожителей»',
		sliderHeader: 'Финал фэнтези-бестселлера',
		src: fantasyFinal,
	},
	{
		sliderDescription: 'Пользуйтесь сервисами Яндекса и получайте подарки',
		sliderHeader: 'Вам мудрость от дракона Дей Ли',
		src: dailyDragon,
	},
	{
		sliderDescription: 'Помогайте жителям Плюс Сити и выполняйте их заказы',
		sliderHeader: 'Новая игра — Комбинатор',
		src: kombinator,
	},
]