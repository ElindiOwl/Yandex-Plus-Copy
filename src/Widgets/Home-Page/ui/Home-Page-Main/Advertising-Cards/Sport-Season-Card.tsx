import {
	useSportSeasonImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Sport-Season-Images.ts'
import { CARD_SIZE, CARD_TYPE, CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx'
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx'
import { useLoading } from 'src/Shared/model/use-loading.ts'
import { SkeletonCard } from 'src/Shared/ui/Skeleton-PlaceHolder/Skeleton-Card/Skeleton-Card.tsx'
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate.ts'

import style from './Card.module.scss'

export const SportSeasonCard = () => {
	const cards = useSportSeasonImages()
	const isLoading = useLoading<CardSliderTemplate>(cards)
	const isError = false

	const cardProps: { cardSize: CARD_SIZE, cardType: CARD_TYPE, slidesPerView: number, isLoading: boolean } = {
		cardSize: 'tall',
		cardType: 'simple',
		isLoading,
		slidesPerView: 4,
	}

	if (isError) {
		return 'Error'
	}
	if (isLoading) {
		return <SkeletonCard {...cardProps} />
	}
	return (
		<div className={style.container}>
			<div className={style.genericCard}>
				<TextHeader description={'Болейте за любимые команды'} header={'Спортивный сезон в Плюсе'} />
				<CardsSlider {...cardProps} cards={cards} />
			</div>
		</div>
	)
}