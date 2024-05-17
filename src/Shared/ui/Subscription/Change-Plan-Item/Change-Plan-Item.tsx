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

    return (
        <div className={style.changePlanItem}>
            <img className={style.changePlanItem__image} src={type} alt='' />
            <div className={style.changePlanItem__information}>
                <div className={style.changePlanItem__naming}>
                    <h6 className={style.changePlanItem__header}>{header}</h6>
                    {majorTagText !== '' && (
                        <p className={style.changePlanItem__majorTag}>{majorTagText}</p>
                    )}
                    {minorTagText !== '' && (
                        <p className={style.changePlanItem__minorTag}>-{minorTagText}</p>
                    )}
                </div>
                <h5 className={style.changePlanItem__pricing}>{description}</h5>
            </div>
            {majorTagText === '' && (
                <div className={style.changePlanItem__buttonContainer}>
                    <BlueButton text={'Перейти'} />
                </div>
            )}
        </div>
    );
};