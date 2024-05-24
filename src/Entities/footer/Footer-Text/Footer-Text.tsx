import style from './Footer-Text.module.scss'

export const FooterText = () => {
	return (
		<>
			<p className={style.footerText}>© 2018–2024 ООО «<a className={style.footerLinks}
				href='Pages/MainPage/Components/Footer/Footer'>Яндекс</a>»
                18+</p>
			<p className={style.footerText}>Проект компании <a className={style.footerLinks}
				href='https://yandex.ru/all?ncrnd=1016'>Яндекс</a>,
                воссозданный в некомерческих целях
			</p>
		</>
	)
}