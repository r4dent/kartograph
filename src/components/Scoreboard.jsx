import React from 'react';

export default function Scoreboard({ scores }) {
  return (
    <div>
      <h3>Scoreboard</h3>
      <ul>
        {Object.entries(scores).map(([player, score]) => (
          <li key={player}>{player}: {score}</li>
        ))}
      </ul>
    </div>
  );
}