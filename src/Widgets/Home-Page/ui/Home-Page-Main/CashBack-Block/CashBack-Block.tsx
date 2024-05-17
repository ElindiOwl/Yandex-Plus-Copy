import style from './CashBack-Block.module.scss';
import { AboutCashBackCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/About-CashBack-Card.tsx';
import { GetPointsCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Get-Points-Card.tsx';
import { SpendPointsCard } from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Spend-Points-Card.tsx';

const CashBackBlock = () => {
    return (
        <div className={style.cashBackBlock}>
            <AboutCashBackCard />
            <GetPointsCard />
            <SpendPointsCard />
        </div>
    );
};

export default CashBackBlock;