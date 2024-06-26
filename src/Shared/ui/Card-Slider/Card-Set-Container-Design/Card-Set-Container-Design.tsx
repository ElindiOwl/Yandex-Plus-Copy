import { AdvertisingCardSet } from 'src/Pages/homePage/Advertising-Card-Set/Advertising-Card-Set.tsx'
import Questions from 'src/Widgets/Home-Page/ui/Questions/Questions.tsx'

import style from './Card-Set-Container-Design.module.scss'

const CardSetContainerDesign = () => {
	return (
		<div className={style.cardSetContainer}>
			<AdvertisingCardSet />
			<Questions />
		</div>
	)
}

export default CardSetContainerDesign