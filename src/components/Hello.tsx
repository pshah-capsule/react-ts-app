import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  counter?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default function Hello({ name, counter = 1, onIncrement, onDecrement }: Props) {
  if (counter <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        {`Hello ${name}!`}
      </div>
      <div>
        <button onClick={onDecrement} disabled={counter === 1}>-</button>
        <span>{` ${counter} `}</span>
        <button onClick={onIncrement} disabled={counter > 19}>+</button>
      </div>
    </div>
  );
}