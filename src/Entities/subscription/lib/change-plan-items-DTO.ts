import { ChangePlanItems } from 'src/Entities/subscription/model/change-plan-items-types.ts';

export const changePlanItemsDTO: ChangePlanItems[] = [
    {
        type: 'month',
        header: 'Яндекс Плюс',
        description: '299 ₽ в месяц',
        isActive: true,
        discount: '',
    },
    {
        type: 'year',
        header: 'Плюс Больше кино на год',
        description: '2 490 ₽ в первый год',
        isActive: false,
        discount: '47%',
    },
    {
        type: 'month',
        header: 'Плюс с Амедиатекой',
        description: '699 ₽ в месяц',
        isActive: false,
        discount: '',
    },
];