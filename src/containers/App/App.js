import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import classes from './App.module.scss';

function App({
  SolverComponent,
  themeColor,
  selectBraille,
  selectCaesarShift,
  selectedSolver,
}) {
  return (
    <div className={classes.container} style={{ backgroundColor: themeColor }}>
      <div className={classes.safeWorkingArea}>
        <Navigation
          selectBraille={selectBraille}
          selectCaesarShift={selectCaesarShift}
          selectedSolver={selectedSolver}
        />
        <SolverComponent themeColor={themeColor} />
      </div>
    </div>
  );
}

App.propTypes = {
  SolverComponent: PropTypes.func.isRequired,
  themeColor: PropTypes.string,
  selectBraille: PropTypes.func.isRequired,
  selectCaesarShift: PropTypes.func.isRequired,
  selectedSolver: PropTypes.func.isRequired,
};

export default App;
