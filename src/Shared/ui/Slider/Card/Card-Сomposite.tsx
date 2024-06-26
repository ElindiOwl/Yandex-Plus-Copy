import style from 'src/Shared/ui/Slider/Card/Card.module.scss'
import { FC, forwardRef } from 'react'
import { cardSizeVariants } from 'src/Shared/lib/Slider/card-Size-Variants.ts'
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate.ts'

export const CardComposite: FC<CardSliderTemplate> = forwardRef(({
	src,
	cardSize = 'tall',
	sliderHeader,
	sliderDescription,
}) => {
	const size = cardSizeVariants[cardSize]

	return (
		<button
			className={`${style.cardSetButton} ${size}`}
		>
			<img alt='' className={style.compositeImage} src={src} />
			<div className={style.compositeTextContainer}>
				<h2 className={style.compositeHeader}>{sliderHeader}</h2>
				<p className={style.compositeParagraph}>{sliderDescription}</p>
			</div>
		</button>
	)
})