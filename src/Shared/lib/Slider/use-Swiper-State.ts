import { useSwiper } from 'swiper/react'
import { useEffect, useState } from 'react'

export const useSwiperState = () => {
	const swiper = useSwiper()
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	useEffect(() => {
		if (swiper) {
			const updateStates = () => {
				setIsBeginning(swiper.isBeginning)
				setIsEnd(swiper.isEnd)
			}

			updateStates()

			swiper.on('slideChange', updateStates)
			swiper.on('reachBeginning', updateStates)
			swiper.on('reachEnd', updateStates)

			return () => {
				swiper.off('slideChange', updateStates)
				swiper.off('reachBeginning', updateStates)
				swiper.off('reachEnd', updateStates)
			}
		}
	}, [swiper])

	return { state: { isBeginning, isEnd }, swiper }
}
