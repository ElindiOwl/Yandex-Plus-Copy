import { FC } from 'react';
import style from './Change-Plan-Item.module.scss';
import { BlueButton } from 'src/Shared/ui/Buttons/Blue-Button/Blue-Button.tsx';

interface changePlanItemProps {
    type: string,
    header: string,
    description: string,
    minorTagText: string,
    majorTagText: string
}

export const ChangePlanItem: FC<changePlanItemProps> = ({
                                                            type,
                                                            header,
                                                            description,
                                                            minorTagText,
                                                            majorTagText,
                                                        }) => {
    const ButtonHandler = () => {

    };

    return (
        <div className={style.changePlanItem}>
            <img className={style.changePlanItem__image} src={type} alt='Срок подписки' />
            <h6 className={style.changePlanItem__header}>{header}</h6>
            <h5 className={style.changePlanItem__description}>{description}</h5>
            {majorTagText !== '' && (
                <p className={style.changePlanItem__majorTag}>{majorTagText}</p>
            )}
            {minorTagText !== '' && (
                <p className={style.changePlanItem__minorTag}>-{minorTagText}</p>
            )}
            <div className={style.changePlanItem__buttonContainer}>
                <BlueButton text={'Перейти'} onClick={ButtonHandler} />
            </div>
        </div>
    );
};