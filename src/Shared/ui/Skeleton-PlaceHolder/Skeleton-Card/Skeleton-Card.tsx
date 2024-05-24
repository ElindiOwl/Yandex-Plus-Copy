import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss'
import { CARD_SIZE, CARD_TYPE, CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx'
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate.ts'
import { FC } from 'react'
import {
	useSportSeasonImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Sport-Season-Images.ts'
import { useLoading } from 'src/Shared/model/use-loading.ts'

interface SkeletonCardProps {
    cardSize: CARD_SIZE;
    cardType: CARD_TYPE;
    slidesPerView: number;
}

const blankCards: CardSliderTemplate[] = Array(10).fill('')

export const SkeletonCard: FC<SkeletonCardProps> = ({ cardSize, cardType, slidesPerView }) => {
	const cards = useSportSeasonImages()
	const isLoading = useLoading(cards)

	return (
		<div className={style.container}>
			<div className={style.genericCard_skeleton}>
				<div className={style.skeletonText}>
					<h2>Я загружаюсь, нужно подождать</h2>
					<p>Слабый интернет?</p>
				</div>
				<CardsSlider
					cardSize={cardSize}
					cardType={cardType}
					cards={blankCards}
					isLoading={isLoading}
					slidesPerView={slidesPerView}
				/>
			</div>
		</div>
	)
}