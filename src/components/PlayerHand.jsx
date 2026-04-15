import React from 'react';

export default function PlayerHand({ hand, onPlace }) {
  return (
    <div>
      <h3>Your Tiles</h3>
      {hand.map((tile, idx) => (
        <button key={idx} onClick={() => onPlace(tile)}>
          {tile}
        </button>
      ))}
    </div>
  );
}