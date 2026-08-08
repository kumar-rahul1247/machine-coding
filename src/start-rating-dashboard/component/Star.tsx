import React from 'react';
import styles from './Star.module.css';

interface StarProps {
  value: number;
  starState: number;
  enableHalfStar?: boolean;
  onClick: (value: number) => void;
  onHover: (value: number) => void;
  onHoverLeave: () => void;
  handleKeyPress: (e: React.KeyboardEvent, value: number) => void;
}

const Star: React.FC<StarProps> = ({ value, starState, enableHalfStar, onClick, onHover, onHoverLeave, handleKeyPress }) => {

  // starState - 3.5
  // value - 4
  const isFullStar = value <= starState;
  const isHalfStar = !isFullStar && value - 0.5 <= starState;
  const styleFullStar = {
    '--star-color': isFullStar ? '#ffc107' : '#e4e5e9',
    '--star-half-color': isHalfStar ? '#ffc107' : 'transparent'
  } as React.CSSProperties;



  if (enableHalfStar) {
    return (
      <span
        className={styles['half-star']}
        onMouseLeave={onHoverLeave}
        style={styleFullStar}
        role="button"
        aria-label={`Rate ${value} star${value !== 1 ? 's' : ''}`}
        tabIndex={-1}
      >
        <span
          className={styles['left-half']}
          onClick={() => onClick(value - 0.5)}
          onMouseEnter={() => onHover(value - 0.5)}
          onKeyDown={(e)=>handleKeyPress(e, value - 0.5)}
          role="button"
          tabIndex={0}
          aria-label={`Rate ${value - 0.5} star`}
          aria-pressed={isHalfStar || isFullStar}
        />
        <span
          className={styles['right-half']}
          onClick={() => onClick(value)}
          onMouseEnter={() => onHover(value)}
          onKeyDown={(e)=>handleKeyPress(e, value)}
          role="button"
          tabIndex={0}
          aria-label={`Rate ${value} star`}
          aria-pressed={isFullStar}
        />
        ★
      </span>
    );
  }


  return (
    <span
      className={styles['full-star']}
      onClick={() => onClick(value)}
      onMouseEnter={() => onHover(value)}
      onMouseLeave={onHoverLeave}
      onKeyDown={(e)=>handleKeyPress(e, value)}
      style={styleFullStar}
      role="button"
      tabIndex={0}
      aria-label={`Rate ${value} star`}
      aria-pressed={isFullStar}
    >
      ★
    </span>
  );

}

export default Star;