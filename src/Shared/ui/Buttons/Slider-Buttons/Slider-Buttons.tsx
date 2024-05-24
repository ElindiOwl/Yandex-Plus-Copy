import cn from 'classnames'
import { useSwiperState } from 'src/Shared/lib/Slider/use-Swiper-State.ts'

import style from './Slider-Buttons.module.scss'

export const SliderButtons = () => {
	const { swiper, state: { isBeginning, isEnd } } = useSwiperState()

	const prevSlideHandler = () => {
		if (swiper) {
			swiper.slidePrev()
		}
	}

	const nextSlideHandler = () => {
		if (swiper) {
			swiper.slideNext()
		}
	}

	return (
		<>
			<button className={cn(style.prevSlideButton, { [style.hidden]: isBeginning })}
				onClick={prevSlideHandler}>
				<svg fill='none' height='20' viewBox='2 2 21 21' width='20'
					xmlns='http://www.w3.org/2000/svg'>
					<path clipRule='evenodd' d='M15.566 4.434a.8.8 0 0 1 0 1.13L9.13 12l6.435 6.434a.8.8 0 1 1-1.132 1.132l-7-7a.8.8 0 0 1 0-1.131l7-7a.8.8 0 0 1 1.132 0Z'
						fill='#21201F'
						fillRule='evenodd' />
				</svg>
			</button>
			<button className={cn(style.nextSlideButton, { [style.hidden]: isEnd })} onClick={nextSlideHandler}>
				<svg fill='none' height='20' viewBox='1 2 21 21' width='20'
					xmlns='http://www.w3.org/2000/svg'>
					<path clipRule='evenodd' d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 1 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
						fill='#21201F'
						fillRule='evenodd' />
				</svg>
			</button>
		</>
	)
}
