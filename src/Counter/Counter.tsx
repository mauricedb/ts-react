import React, { useState } from 'react';

type CounterState = number;

type CounterProps = {
  amount: number;
};

export const Counter = ({ amount }: CounterProps) => {
  const [count, setCount] = useState<CounterState>(0);

  return (
    <div className="text-center">
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + amount)}>Increment</button>
      </div>
    </div>
  );
};

Counter.defaultProps = {
  amount: 1,
};

Counter.displayName = 'Counter';
