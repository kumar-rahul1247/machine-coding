import Star from './Star';
import styles from './Star.module.css';
import useStarRating from '../hooks/useRating';

interface StarRatingProps {
    totalStars: number;
    currentRating: number;
    enableHalfStar?: boolean;
    setCurrentRating: (rating: number) => void;
}

const StarRating = ({
  totalStars = 5,
  currentRating = 0,
  enableHalfStar = false,
  setCurrentRating,
}: StarRatingProps) => {

  const {
        starState,
        handleStarClick,
        handleStarHover,
        handleStarHoverLeave,
    } = useStarRating({ currentRating, setCurrentRating });

    return (
        <div className={styles['star-row']}>
            {Array.from({ length: totalStars }, (_, index) => {
                const starNumber = index + 1;
                return (
                    <Star
                        key={starNumber}
                        value={starNumber}
                        starState={starState}
                        enableHalfStar={enableHalfStar}
                        onClick={handleStarClick}
                        onHover={handleStarHover}
                        onHoverLeave={handleStarHoverLeave}
                    />
                );
            })}
        </div>
    )


}

export default StarRating;