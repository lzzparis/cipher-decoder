import React from 'react';
import PropTypes from 'prop-types';
import classes from './App.module.scss';

function App({ SolverComponent }) {
  return (
    <div className={classes.container}>
      <SolverComponent />
    </div>
  );
}

App.propTypes = {
  SolverComponent: PropTypes.func,
};

export default App;
