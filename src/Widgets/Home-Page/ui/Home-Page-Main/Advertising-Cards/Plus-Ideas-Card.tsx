import {
	usePlusIdeasImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Plus-Ideas-Images.ts'
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss'
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx'
import { CARD_SIZE, CARD_TYPE, CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx'
import { useLoading } from 'src/Shared/model/use-loading.ts'
import { SkeletonCard } from 'src/Shared/ui/Skeleton-PlaceHolder/Skeleton-Card/Skeleton-Card.tsx'

export const PlusIdeasCard = () => {
	const cards = usePlusIdeasImages()
	const isLoading = useLoading(cards)
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
	return isLoading ? <SkeletonCard {...cardProps} /> : (
		<div className={style.container}>
			<div className={style.genericCard}>
				<TextHeader description={'Собрали их для вас'} header={'Идеи, чем заняться в Плюсе'} />
				<CardsSlider {...cardProps} cards={cards} />
			</div>
		</div>
	)
}