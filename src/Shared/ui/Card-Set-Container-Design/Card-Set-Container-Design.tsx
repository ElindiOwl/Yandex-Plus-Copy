import style from './Card-Set-Container-Design.module.scss';
import { AdvertisingCardSet } from 'src/Pages/homePage/Advertising-Card-Set/Advertising-Card-Set';
import Questions from 'src/Widgets/Home-Page/ui/Questions/Questions';

const CardSetContainerDesign = () => {
    return (
        <div className={style.cardSetContainer}>
            <AdvertisingCardSet />
            <Questions />
        </div>
    );
};

export default CardSetContainerDesign;