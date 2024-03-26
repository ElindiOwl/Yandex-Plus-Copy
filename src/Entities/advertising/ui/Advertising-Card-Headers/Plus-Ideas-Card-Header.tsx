import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';

export const PlusIdeasCardHeader = () => {
    return (
        <div className={sectionStyle.cardText}>
            <h2 className={sectionStyle.firstH}>Идеи, чем заняться в Плюсе</h2>
            <p>Собрали их для вас</p>
        </div>
    );
};