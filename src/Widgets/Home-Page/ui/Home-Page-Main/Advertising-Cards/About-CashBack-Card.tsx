import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss'
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx'
import { CARD_SIZE, CARD_TYPE, CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx'
import yandex from 'src/Shared/assets/Images/Home-Page-Advertising/About-CashBack-Card-Images/Yandex.svg'
import {
	useAboutCashBackImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-About-CashBack-Images.ts'
import { useLoading } from 'src/Shared/model/use-loading.ts'
import { SkeletonCard } from 'src/Shared/ui/Skeleton-PlaceHolder/Skeleton-Card/Skeleton-Card.tsx'

export const AboutCashBackCard = () => {
	const cards = useAboutCashBackImages()
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
	return (
		<div className={style.genericCard}>
			<TextHeader
				header={
					<>
                        Кешбэк баллами Плюса <br /> при оплате через <img alt='yandex' src={yandex} /> Пэй
					</>
				}
			/>
			<CardsSlider {...cardProps}
				cards={cards}
				slidesPerGroup={2}
			/>
		</div>
	)
}