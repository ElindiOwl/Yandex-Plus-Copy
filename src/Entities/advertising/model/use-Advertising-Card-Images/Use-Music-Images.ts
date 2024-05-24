import { useEffect, useState } from 'react'
import { getYandexMusicImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Music-Images'

import { CardSliderTemplate } from '../CardSliderTemplate'

export const useMusicImages = () => {
	const [musicImages, setMusicImages] = useState<CardSliderTemplate[]>([])

	useEffect(() => {
		const fetchMusicImages = async () => {
			const musicCardImagesDTO = await getYandexMusicImages()
			setMusicImages(musicCardImagesDTO)
		}

		fetchMusicImages()
	}, [])

	return musicImages
}