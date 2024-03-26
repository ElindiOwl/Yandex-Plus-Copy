export const MoveSlideRight = (index, setIndex, cardImages) => {
    if (index >= cardImages.length) {
        return;
    }
    setIndex(prevIndex => prevIndex + 1);
};