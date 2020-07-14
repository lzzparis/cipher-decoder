import React, { useState } from 'react';
import { alphaIndexes, alphaArray } from './CaesarShift.utils';
import classes from './CaesarShift.module.scss';

function CaesarShift({ themeColor }) {
  const [letter, setLetter] = useState('');
  const [symbol, setSymbol] = useState('+');
  const [count, setCount] = useState('');
  const [result, setResult] = useState('');

  const getResult = (e) => {
    e.preventDefault();
    const uppercaseLetter = letter.toUpperCase();
    const startingIndex = alphaIndexes[uppercaseLetter];
    const operation = +[symbol, count].join('');
    const operatedIndex = startingIndex + operation;
    const finalIndex = operatedIndex < 0 ? alphaArray.length + operatedIndex : operatedIndex;
    const newLetter = Number.isNaN(finalIndex) ? 'Invalid' : alphaArray[finalIndex];

    setResult(newLetter);
  };

  const clearInputs = () => {
    setLetter('');
    setSymbol('+');
    setCount('');
  };

  return (
    <div className={classes.container}>
      <h1>Caesar Shift</h1>
      <p className="result">{result}</p>
      <div className={classes.inputs}>
        <form id="caesar-shift-form">
          <div className="row">
            <label className={classes.label}>
              <input type="text" value={letter} onChange={(e) => setLetter(e.target.value)} />
            </label>
            <label className={classes.label}>
              <select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
              </select>
            </label>
            <label className={classes.label}>
              <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
            </label>
          </div>
          <div className="row">
            <button className="buttonOutline" type="reset" onClick={clearInputs}>Reset</button>
            <button type="submit" onClick={getResult} style={{ color: themeColor }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CaesarShift;
