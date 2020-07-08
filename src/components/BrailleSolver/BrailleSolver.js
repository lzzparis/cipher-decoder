import React from 'react';
// import PropTypes from 'prop-types';
import { lookupBraille } from './BrailleSolver.utils';
import classes from './BrailleSolver.module.scss';

function BrailleSolver() {
  return (
    <div className={classes.container}>
      <h1>BrailleSolver</h1>
      <div className={classes.inputs}>
        {lookupBraille('100000')}
      </div>
    </div>
  );
}

// BrailleSolver.propTypes = {
//
// };

export default BrailleSolver;
