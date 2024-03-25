import './KinoAndMusicCard.scss';
import YandexMusicCard from '../../../../../Features/Kino-and-Music-Card/ui/Yandex-Music-Card/Yandex-Music-Card';
import KinopoiskCard2 from 'src/Features/Kino-and-Music-Card/ui/Kinopoisk-Card2/Kinopoisk-Card2';


const KinoAndMusicCard = () => {
    return (
        <div className='MainKinoMusicDiv'>
            <KinopoiskCard2 itemsToSlide={3} />
            <YandexMusicCard />
        </div>
    );
};

export default KinoAndMusicCard;