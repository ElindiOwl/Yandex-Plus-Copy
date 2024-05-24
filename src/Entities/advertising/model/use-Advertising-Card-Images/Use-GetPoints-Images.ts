import { useEffect, useState } from 'react'
import { getGetPointsImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-GetPoints-Images'

import { CardSliderTemplate } from '../CardSliderTemplate'

export const useGetPointsImages = () => {
	const [getPointsImages, setGetPointsImages] = useState<CardSliderTemplate[]>([])

	useEffect(() => {
		const fetchGetPointsImages = async () => {
			const getPointsImagesDTO = await getGetPointsImages()
			setGetPointsImages(getPointsImagesDTO)
		}

		fetchGetPointsImages()
	}, [])

	return getPointsImages
}