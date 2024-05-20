import style from './Questions.module.scss';
import { QuestionsAccordion } from 'src/Features/ui/Questions/Questions-Accordion.tsx';
import { questionsMap } from 'src/Entities/questions/lib/Questions-Map/questions-map.tsx';

const Questions = () => {

    return (
        <div className={style.questions}>
            <div className={style.questions__textArea}>
                <h2 className={style.questions__text}>Остались вопросы? <br />Сейчас ответим</h2>
            </div>
            <QuestionsAccordion mapToUse={questionsMap} containerClassName={style.questions__accordion}
                                isHoverEffect={true} />
        </div>
    );
};

export default Questions;