import { ChangePlanItems } from 'src/Entities/subscription/model/change-plan-items-types.ts'

export const changePlanItemsDTO: ChangePlanItems[] = [
	{
		description: '299 ₽ в месяц',
		discount: '',
		header: 'Яндекс Плюс',
		isActive: true,
		type: 'month',
	},
	{
		description: '2 490 ₽ в первый год',
		discount: '47%',
		header: 'Плюс Больше кино на год',
		isActive: false,
		type: 'year',
	},
	{
		description: '699 ₽ в месяц',
		discount: '',
		header: 'Плюс с Амедиатекой',
		isActive: false,
		type: 'month',
	},
]