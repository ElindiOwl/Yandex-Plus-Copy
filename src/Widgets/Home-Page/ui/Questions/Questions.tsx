import './Questions.scss';
import { QuestionsAccordion } from 'src/Shared/ui/Accordion/QuestionsAccordion.tsx';

const Questions = () => {

    return (
        <div className='questionsCardDiv'>
            <div className='textDiv'>
                <h2 className='h2Questions'>Остались вопросы? <br />&nbsp;&nbsp;&nbsp;Сейчас ответим</h2>
            </div>
            <QuestionsAccordion />
        </div>
    );
};

export default Questions;