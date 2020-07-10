import React, { useState } from 'react';
import classes from './AlphaShifter.module.scss';

function AlphaShifter({ themeColor }) {
  const [inputValue, setInput] = useState('');
  const [result, setResult] = useState('');

  const getResult = (e) => {
    e.preventDefault();
    setResult('pie');
  };

  const clearInput = () => setInput('');

  return (
    <div className={classes.container}>
      <h1>Alpha Shifter</h1>
      <p className="result">{result}</p>
      <div className={classes.inputs}>
        <form id="alpha-shifter-form">
          <label className={classes.label}>
            <span>Equation:</span>
            <input type="text" value={inputValue} onChange={(e) => setInput(e.target.value)} />
          </label>
          <div className="row">
            <button className="outline" type="reset" onClick={clearInput}>Reset</button>
            <button type="submit" onClick={getResult} style={{ color: themeColor }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlphaShifter;
