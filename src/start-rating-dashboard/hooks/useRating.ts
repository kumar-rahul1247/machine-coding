import { useState } from 'react';

interface UseRatingProps {
    currentRating: number;
    setCurrentRating: (rating: number) => void;
}

const useStarRating = ({ currentRating, setCurrentRating }: UseRatingProps) => {
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const starState = isHovered ? hoverRating : currentRating;

    const handleStarClick = (starNumber: number) => {
        if (currentRating === starNumber) {
            setCurrentRating(0);
            setIsHovered(false);
        } else {
            setCurrentRating(starNumber);
        }
    };

    const handleStarHover = (starNumber: number) => {
        setHoverRating(starNumber);
        setIsHovered(true);
    };

    const handleStarHoverLeave = () => {
        setHoverRating(0);
        setIsHovered(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent, ratingValue: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleStarClick(ratingValue);
        }
    };

    return {
        starState,
        handleStarClick,
        handleStarHover,
        handleStarHoverLeave,
        handleKeyPress
    };
};

export default useStarRating;