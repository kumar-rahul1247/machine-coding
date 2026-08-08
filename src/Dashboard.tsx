import React from 'react';
import style from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={style['dashboard-container']}>
      <div className={style['dashboard-card']}>
        <h1>Star Rating</h1>
        <div> ★  ★  ★  ★  ★</div>
        <button
          className={style['dashboard-button']}
          onClick={() => navigate('/start-rating')}
        >
          Go to Star Rating</button>
      </div>

      <div className={style['dashboard-card']}>
        <h1>Infinite Loading</h1>
        <div> ★  ★  ★  ★  ★</div>
        <button className={style['dashboard-button']} onClick={() => navigate('/infinite-loading')}>
          Go to Infinite Loading
        </button>
      </div>

      {/* <div className={style['dashboard-card']}>
        <h1>Star Rating Functionality</h1>
        <div> ★  ★  ★  ★  ★</div>
        <button className={style['dashboard-button']}>Go to Star Rating</button>
      </div>

      <div className={style['dashboard-card']}>
        <h1>Star Rating Functionality</h1>
        <div> ★  ★  ★  ★  ★</div>
        <button className={style['dashboard-button']}>Go to Star Rating</button>
      </div>

      <div className={style['dashboard-card']}>
        <h1>Star Rating Functionality</h1>
        <div> ★  ★  ★  ★  ★</div>
        <button className={style['dashboard-button']}>Go to Star Rating</button>
      </div> */}

    </div>
  );
};

export default Dashboard;