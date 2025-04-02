import React from 'react';
import './styles.css'

const Card = ({children, width, height }) => {
    const cardStyle = {
        minWidth: width || 'auto', 
        height: height || 'auto',
    };
    return (
        <div className='content-card flex column align-center' style={cardStyle}>
            {children}
        </div>
    );
};

export default Card;