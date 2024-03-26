import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';

export const SpendPointsCardHeader = () => {
    return (
        <div className={sectionStyle.cardText}>
            <h2 className={sectionStyle.firstH}>Как потратить баллы</h2>
        </div>
    );
};