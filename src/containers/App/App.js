import React from 'react';
import PropTypes from 'prop-types';
import classes from './App.module.scss';

function App({ SolverComponent, themeColor }) {
  return (
    <div className={classes.container}>
      <SolverComponent themeColor={themeColor} />
    </div>
  );
}

App.propTypes = {
  SolverComponent: PropTypes.func,
  themeColor: PropTypes.string,
};

export default App;
