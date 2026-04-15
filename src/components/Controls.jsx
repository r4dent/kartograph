import React from 'react';

export default function Controls({ onEndTurn }) {
  return (
    <div>
      <button onClick={onEndTurn}>End Turn</button>
    </div>
  );
}