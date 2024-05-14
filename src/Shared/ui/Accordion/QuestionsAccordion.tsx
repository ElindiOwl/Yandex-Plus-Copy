import {
    QuestionsListItem,
} from 'src/Features/ui/Questions-List-Item/Questions-List-Item.tsx';
import { questionsMap } from 'src/Entities/questions/lib/questions-map.tsx';

export const QuestionsAccordion = () => {
    return (
        <>
            {Object.entries(questionsMap).map(([key, question]) => (
                <QuestionsListItem key={key} {...question} />
            ))}
        </>
    );
};