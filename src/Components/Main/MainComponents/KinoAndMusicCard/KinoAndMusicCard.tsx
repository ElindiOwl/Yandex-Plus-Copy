import './KinoAndMusicCard.scss';
import KinopoiskCard from './KinopoiskCard/KinopoiskCard';
import YandexMusicCard from './YandexMusicCard/YandexMusicCard';


const KinoAndMusicCard = () => {
    return (
        <div className='MainKinoMusicDiv'>
            <KinopoiskCard />
            <YandexMusicCard />
        </div>
    );
};

export default KinoAndMusicCard;