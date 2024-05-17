import './Questions.scss';
import { QuestionsAccordion } from 'src/Features/ui/Questions/Questions-Accordion.tsx';
import { questionsMap } from 'src/Entities/questions/lib/questions-map.tsx';

const Questions = () => {

    return (
        <div className='questionsCardDiv'>
            <div className='textDiv'>
                <h2 className='h2Questions'>Остались вопросы? <br />Сейчас ответим</h2>
            </div>
            <QuestionsAccordion mapToUse={questionsMap} />
        </div>
    );
};

export default Questions;