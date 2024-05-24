import { sportSeasonCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Sport-Season-Card-Images'

import { CardSliderTemplate } from '../../model/CardSliderTemplate'

export const getSportSeasonImages = async () => {
	return await new Promise<CardSliderTemplate[]>(function(resolve) {
		setTimeout(function() {
			resolve(sportSeasonCardImagesDTO)
		}, 500)
	},
	)
}