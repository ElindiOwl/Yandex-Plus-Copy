import {
    QuestionsListItem,
} from 'src/Shared/ui/Accordion/Questions-List-Item/Questions-List-Item.tsx';
import { questionsMap } from 'src/Shared/ui/Accordion/Question-Map/questions-map.tsx';

export const QuestionsAccordion = () => {
    return (
        <>
            {Object.entries(questionsMap).map(([key, question]) => (
                <QuestionsListItem key={key} {...question} />
            ))}
        </>
    );
};