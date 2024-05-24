import { useNewInPlusData } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-New-In-Plus-Data.ts'
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss'
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx'
import { CARD_SIZE, CARD_TYPE, CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx'
import { useLoading } from 'src/Shared/model/use-loading.ts'
import { SkeletonCard } from 'src/Shared/ui/Skeleton-PlaceHolder/Skeleton-Card/Skeleton-Card.tsx'

export const NewInPlusCard = () => {
	const cards = useNewInPlusData()
	const isLoading = useLoading(cards)
	const isError = false

	const cardProps: { cardSize: CARD_SIZE, cardType: CARD_TYPE, slidesPerView: number, isLoading: boolean } = {
		cardSize: 'wide',
		cardType: 'composite',
		isLoading,
		slidesPerView: 2.15,
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
				<TextHeader description={''} header={'Новое в Плюсе'} />
				<CardsSlider {...cardProps} cards={cards} />
			</div>
		</div>
	)
}