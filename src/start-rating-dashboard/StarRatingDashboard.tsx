import React, {useState} from 'react';
import './StarRatingDashboard.css';
import  {StarRating}  from './component';

const StarRatingDashboard: React.FC = () => {
    const [userFullRating, setUserFullRating] = useState<number>(3);
    const [userHalfRating, setUserHalfRating] = useState<number>(3);

    return (
        <div className='star-dashboard'>
            <div className='star-card'>
                <h1>Full Star Rating</h1>
                <StarRating 
                    totalStars={6}
                    currentRating={userFullRating}
                    setCurrentRating={setUserFullRating}
                />
                <p>User Rating - {userFullRating}</p>
            </div>

            <div className='star-card'>
                <h1>Half Star Rating</h1>
                <StarRating 
                    totalStars={5}
                    currentRating={userHalfRating}
                    setCurrentRating={setUserHalfRating}
                    enableHalfStar={true}
                />
                <p>User Rating - {userHalfRating}</p>
            </div>
        </div>
    );
}

export default StarRatingDashboard;