import { AboutCashBackCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/About-CashBack-Card-Images'

import { CardSliderTemplate } from '../../model/CardSliderTemplate'

export const getAboutCashBackImages = async () => {
	return await new Promise<CardSliderTemplate[]>(function(resolve) {
		setTimeout(function() {
			resolve(AboutCashBackCardImagesDTO)
		}, 10)
	})
}