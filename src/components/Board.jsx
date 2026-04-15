import React from 'react';
import Tile from './Tile';

export default function Board({ board, onTileClick }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${board[0].length}, 42px)`
    }}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onClick={() => onTileClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}