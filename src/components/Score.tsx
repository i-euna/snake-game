import React from 'react';

type ScoreProps = {
  value: number;
};

const Score: React.FC<ScoreProps> = ({ value }) => {
  return <div className="score">Score: {value}</div>;
};

export default Score;
