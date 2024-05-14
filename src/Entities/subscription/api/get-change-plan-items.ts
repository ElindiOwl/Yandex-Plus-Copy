import { ChangePlanItems } from 'src/Entities/subscription/model/change-plan-items-types.ts';
import { changePlanItemsDTO } from 'src/Entities/subscription/lib/change-plan-items-DTO.ts';

export const getChangePlanItems = async () => {

    return await new Promise<ChangePlanItems[]>(function(resolve) {
        setTimeout(function() {
                resolve(changePlanItemsDTO);
            },
            10);
    });

};