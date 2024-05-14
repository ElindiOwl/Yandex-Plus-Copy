import './Change-Plan.scss';
import OneMonthSub from 'src/Shared/assets/Images/Subscription-Page-Images/OneMonthSub.png';
import OneYearSub from 'src/Shared/assets/Images/Subscription-Page-Images/OneYearSub.png';
import { ChangePlanItem } from 'src/Entities/subscription/ui/Change-Plan-Item/Change-Plan-Item.tsx';
import { useChangePlanItems } from 'src/Entities/subscription/model/use-change-plan-items.ts';
import { CHANGE_PLAN_TYPE } from 'src/Entities/subscription/model/change-plan-items-types.ts';

const changePlanImages: Record<CHANGE_PLAN_TYPE, string> = {
    month: OneMonthSub,
    year: OneYearSub,
};

const ChangePlan = () => {
    const itemsData = useChangePlanItems();

    return (
        <div className='changePlanSubPayment'>
            {itemsData.map((data) => (
                <ChangePlanItem
                    type={changePlanImages[data.type]}
                    header={data.header}
                    description={data.description}
                    majorTagText={data.isActive ? 'Активен' : ''}
                    minorTagText={data.discount}
                />
            ))}
        </div>
    );
};

export default ChangePlan;