import style from './Kino-And-Music-Card.module.scss';
import AdvertisingCardTemplate from 'src/Widgets/ui/Advertising-Card-Template';
import { useKinopoiskImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Kinopoisk-Images';
import { KinopoiskCardHeader } from 'src/Entities/advertising/ui/Advertising-Card-Headers/Kinopoisk-Card-Header';
import { YandexMusicCardHeader } from 'src/Entities/advertising/ui/Advertising-Card-Headers/Yandex-Music-Card-Header';
import { useMusicImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Music-Images';


const KinoAndMusicCard = () => {
    return (
        <div className={style.MainKinoMusicDiv}>
            <AdvertisingCardTemplate cardImagesFunction={useKinopoiskImages} cardSize={'tall'}
                                     cardHeaderText={KinopoiskCardHeader} itemsToSlide={3} />
            <AdvertisingCardTemplate cardImagesFunction={useMusicImages} cardSize={'small'}
                                     cardHeaderText={YandexMusicCardHeader} itemsToSlide={1} />
        </div>
    );
};

export default KinoAndMusicCard;