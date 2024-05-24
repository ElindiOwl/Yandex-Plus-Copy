import { NewInPlusDataDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/New-In-Plus-Data'

import { CardSliderTemplate } from '../../model/CardSliderTemplate'

export const getNewInPlusData = async () => {
	return await new Promise<CardSliderTemplate[]>(function(resolve) {
		setTimeout(function() {
			resolve(NewInPlusDataDTO)
		}, 10)
	})
}