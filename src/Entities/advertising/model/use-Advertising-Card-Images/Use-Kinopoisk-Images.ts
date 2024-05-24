import { getKinopoiskImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Kinopoisk-Images'
import { useEffect, useState } from 'react'

import { CardSliderTemplate } from '../CardSliderTemplate'


export const useKinopoiskImages = () => {
	const [kinopoiskImages, setKinopoiskImages] = useState<CardSliderTemplate[]>([])

	useEffect(() => {
		const fetchKinopoiskImages = async () => {
			const kinopoiskCardImagesDTO = await getKinopoiskImages()
			setKinopoiskImages(kinopoiskCardImagesDTO)
		}

		fetchKinopoiskImages()
	}, [])

	return kinopoiskImages
}