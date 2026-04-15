import React from 'react';

export default function Tile({ value, onClick }) {
  return (
    <button
      style={{
        width: 40,
        height: 40,
        fontSize: 18,
        margin: 2,
        background: value ? '#ffe595' : '#dedede'
      }}
      onClick={onClick}
    >
      {value || ''}
    </button>
  );
}