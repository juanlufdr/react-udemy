import PropTypes from 'prop-types';
import { useDeferredValue, useState } from 'react';

export const CounterApp = ({ value }) => {

  console.log('render');

  const [ counter, setCounter ] = useState(value);
  
  const handleAdd = () => {
    setCounter ( (c) => c+1);
  }

  const handleMinus = () => {
    setCounter ( (c) => c-1);
  }
  
  const handleReset = () => {
    setCounter ( useDeferredValue);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
