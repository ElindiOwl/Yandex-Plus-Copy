import { plusIdeasImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Plus-Ideas-Card-Images'

import { CardSliderTemplate } from '../../model/CardSliderTemplate'

export const getPlusIdeasImages = async () => {
	return await new Promise<CardSliderTemplate[]>(function(resolve) {
		setTimeout(function() {
			resolve(plusIdeasImagesDTO)
		}, 10)
	})
}