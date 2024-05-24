import { useEffect, useState } from 'react'
import { getPlusIdeasImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Plus-Ideas-Images'

import { CardSliderTemplate } from '../CardSliderTemplate'

export const usePlusIdeasImages = () => {
	const [plusIdeasImages, setPlusIdeasImages] = useState<CardSliderTemplate[]>([])

	useEffect(() => {
		const fetchPlusIdeasImages = async () => {
			const plusIdeasCardImagesDTO = await getPlusIdeasImages()
			setPlusIdeasImages(plusIdeasCardImagesDTO)
		}

		fetchPlusIdeasImages()
	}, [])

	return plusIdeasImages
}