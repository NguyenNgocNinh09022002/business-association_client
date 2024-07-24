import React, { useState, useEffect } from 'react';
import { GoStarFill } from 'react-icons/go';
import './StarRating.scss';

const StarRating = ({ initialRating = 0, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        const savedRating = localStorage.getItem('eventRating');
        if (savedRating) {
            setRating(Number(savedRating));
        }
    }, []);

    const handleStarClick = (index) => {
        setRating(index);
        localStorage.setItem('eventRating', index);
        if (onRatingChange) onRatingChange(index);
    };

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    return (
        <div className="star__rating">
            {[1, 2, 3, 4, 5].map((index) => (
                <GoStarFill
                    key={index}
                    onClick={() => handleStarClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ color: index <= (hoverRating || rating) ? '#FFD700' : '#dddddd', cursor: 'pointer' }}
                    title={`${index} sao`}
                />
            ))}
        </div>
    );
};

export default StarRating;
