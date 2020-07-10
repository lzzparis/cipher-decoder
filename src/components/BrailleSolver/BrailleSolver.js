import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { brailleToLatin, getBinary } from './BrailleSolver.utils';
import classes from './BrailleSolver.module.scss';

const setterGetter = (valX, setValX) => () => setValX(getBinary(!valX));

function Checkdot({ value, stateHandler, className }) {
  return (
    <input className={className} type="checkbox" value={value} onChange={setterGetter(value, stateHandler)} />
  );
}

function BrailleSolver({ themeColor }) {
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
    setResult(brailleToLatin[fullVal] || 'n/a');
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
      <h1>Braille Solver</h1>
      <p className="result">{result}</p>
      <div className={classes.inputs}>
        <form id="braille-form">
          <div className="row">
            <Checkdot value={val5} stateHandler={setVal5} className={classes.checkdot} />
            <Checkdot value={val4} stateHandler={setVal4} className={classes.checkdot} />
          </div>
          <div className="row">
            <Checkdot value={val3} stateHandler={setVal3} className={classes.checkdot} />
            <Checkdot value={val2} stateHandler={setVal2} className={classes.checkdot} />
          </div>
          <div className="row">
            <Checkdot value={val1} stateHandler={setVal1} className={classes.checkdot} />
            <Checkdot value={val0} stateHandler={setVal0} className={classes.checkdot} />
          </div>
          <div className="row">
            <button className="outline" type="reset" onClick={clearInputs}>Reset</button>
            <button type="submit" onClick={getResult} style={{ color: themeColor }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

BrailleSolver.propTypes = {
  themeColor: PropTypes.string,
};

Checkdot.propTypes = {
  value: PropTypes.number.isRequired,
  stateHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default BrailleSolver;
