import React from 'react';

const TileCard = ({ tile, onClick }) => {
    return (
        <div className='tile-card' onClick={() => onClick(tile)}>
            <h3>{tile.name}</h3>
            <p>{tile.description}</p>
        </div>
    );
};

export default TileCard;
