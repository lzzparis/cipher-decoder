import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { lookupBraille, getBinary } from './BrailleSolver.utils';
import classes from './BrailleSolver.module.scss';

const setterGetter = (valX, setValX) => () => setValX(getBinary(!valX));

function Checkbox({ value, stateHandler }) {
  return (
    <input type="checkbox" value={value} onChange={setterGetter(value, stateHandler)} />
  );
}

function BrailleSolver() {
  const [val0, setVal0] = useState(0);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [val4, setVal4] = useState(0);
  const [val5, setVal5] = useState(0);

  const [result, setResult] = useState('');

  const getResult = (e) => {
    e.preventDefault();
    const fullVal = [val5, val4, val3, val2, val1, val0].join('');
    setResult(lookupBraille(fullVal) || 'Not a valid Braille encoding');
  };

  const clearInputs = () => {
    setVal0(false);
    setVal1(false);
    setVal2(false);
    setVal3(false);
    setVal4(false);
    setVal5(false);
    setResult('');
  };

  return (
    <div className={classes.container}>
      <h1>BrailleSolver</h1>
      <div className={classes.inputs}>
        <form id="braille-form">
          <div className={classes.row}>
            <Checkbox value={val5} stateHandler={setVal5} />
            <Checkbox value={val4} stateHandler={setVal4} />
          </div>
          <div className={classes.row}>
            <Checkbox value={val3} stateHandler={setVal3} />
            <Checkbox value={val2} stateHandler={setVal2} />
          </div>
          <div className={classes.row}>
            <Checkbox value={val1} stateHandler={setVal1} />
            <Checkbox value={val0} stateHandler={setVal0} />
          </div>
          <button type="submit" onClick={getResult}>Submit</button>
          <button type="reset" onClick={clearInputs}>Reset</button>
        </form>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  value: PropTypes.number.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default BrailleSolver;
