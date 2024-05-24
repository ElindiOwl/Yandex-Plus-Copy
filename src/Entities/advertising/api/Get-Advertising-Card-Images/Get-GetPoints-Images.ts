import { getPointsCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Get-Points-Card-Images'

import { CardSliderTemplate } from '../../model/CardSliderTemplate'

export const getGetPointsImages = async () => {
	return await new Promise<CardSliderTemplate[]>(function(resolve) {
		setTimeout(function() {
			resolve(getPointsCardImagesDTO)
		}, 10)
	})
}