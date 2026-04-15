import React, { useState } from "react";
import Board from "./components/Board";
import PlayerHand from "./components/PlayerHand";
import Scoreboard from "./components/Scoreboard";
import Controls from "./components/Controls";

const defaultBoardSize = 10;
const emptyRow = Array(defaultBoardSize).fill(null);

function getInitialBoard(size) {
  return Array(size).fill().map(() => [...emptyRow]);
}

function getInitialHand() {
  // Example: random letters as tiles
  return ["A", "B", "C"];
}

function getInitialScores() {
  return { "Player 1": 0, "Player 2": 0 };
}

export default function App() {
  const [board, setBoard] = useState(getInitialBoard(defaultBoardSize));
  const [hand, setHand] = useState(getInitialHand());
  const [activeTile, setActiveTile] = useState(null);
  const [scores, setScores] = useState(getInitialScores());
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");

  const handleTileClick = (row, col) => {
    if (!activeTile) return;
    if (board[row][col]) return; // already filled
    // Place tile
    const newBoard = board.map(r => r.slice());
    newBoard[row][col] = activeTile;
    setBoard(newBoard);
    setHand(hand.filter(t => t !== activeTile));
    setActiveTile(null);
    // Optionally update score!
  };

  const handlePlace = (tile) => setActiveTile(tile);

  const handleEndTurn = () => {
    // Example stub: switch player, refill hand, etc.
    setHand(getInitialHand());
    setCurrentPlayer(cur => (cur === "Player 1" ? "Player 2" : "Player 1"));
  };

  return (
    <div style={{ display: "flex", gap: 32, padding: 32 }}>
      <div>
        <h2>Kartograph</h2>
        <Board board={board} onTileClick={handleTileClick} />
        <PlayerHand hand={hand} onPlace={handlePlace} />
        <Controls onEndTurn={handleEndTurn} />
      </div>
      <Scoreboard scores={scores} />
    </div>
  );
}