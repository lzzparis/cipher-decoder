import React from 'react';
import PropTypes from 'prop-types';
import {
  SOLVER_CAESAR_SHIFT,
  SOLVER_BRAILLE,
} from '../../constants';
import classes from './Navigation.module.scss';

function Navigation({
  selectBraille, selectCaesarShift, selectedSolver, themeColor,
}) {
  return (
    <div className={classes.container}>
      <button
        type="button"
        className={selectedSolver === SOLVER_BRAILLE ? 'navButtonSelected' : 'navButton'}
        onClick={selectBraille}
      >
        Braille
      </button>
      <button
        type="button"
        className={selectedSolver === SOLVER_CAESAR_SHIFT ? 'navButtonSelected' : 'navButton'}
        onClick={selectCaesarShift}
      >
        Caesar Shift
      </button>
    </div>
  );
}

Navigation.propTypes = {
  selectBraille: PropTypes.func.isRequired,
  selectCaesarShift: PropTypes.func.isRequired,
  selectedSolver: PropTypes.string.isRequired,
};

export default Navigation;
