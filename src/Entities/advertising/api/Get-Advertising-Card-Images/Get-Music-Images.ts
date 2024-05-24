import { yandexMusicImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Music-Card-Images'

import { CardSliderTemplate } from '../../model/CardSliderTemplate'

export const getYandexMusicImages = async () => {
	return await new Promise<CardSliderTemplate[]>(function(resolve) {
		setTimeout(function() {
			resolve(yandexMusicImagesDTO)
		}, 10)
	})
}