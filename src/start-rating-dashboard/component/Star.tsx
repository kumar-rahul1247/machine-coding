import React from 'react';
import styles from './Star.module.css';

interface StarProps {
  value: number;
  starState: number;
  enableHalfStar?: boolean;
  onClick: (value: number) => void;
  onHover: (value: number) => void;
  onHoverLeave: () => void;
}

const Star: React.FC<StarProps> = ({ value, starState, enableHalfStar, onClick, onHover, onHoverLeave }) => {

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
      >
        <span
          className={styles['left-half']}
          onClick={() => onClick(value - 0.5)}
          onMouseEnter={() => onHover(value - 0.5)}
        />
        <span
          className={styles['right-half']}
          onClick={() => onClick(value)}
          onMouseEnter={() => onHover(value)}
          // style={styleFullStar}
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
      style={styleFullStar}
    >
      ★
    </span>
  );

}

export default Star;