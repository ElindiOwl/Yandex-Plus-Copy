export const MoveSlideLeft = (index, setIndex) => {
    if (index === 0) {
        return;
    }
    setIndex(prevIndex => prevIndex - 1);
};