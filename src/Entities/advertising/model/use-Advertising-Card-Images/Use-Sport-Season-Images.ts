import { useEffect, useState } from 'react'
import { getSportSeasonImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Sport-Season-Images'

import { CardSliderTemplate } from '../CardSliderTemplate'

export const useSportSeasonImages = () => {
	const [sportSeasonImages, setSportSeasonImages] = useState<CardSliderTemplate[]>([])

	useEffect(() => {
		const fetchSportSeasonImages = async () => {
			const sportSeasonImagesDTO = await getSportSeasonImages()
			setSportSeasonImages(sportSeasonImagesDTO)
		}

		fetchSportSeasonImages()
	}, [])

	return sportSeasonImages
}