import { compose, withStateHandlers, withProps } from 'recompose';
import {
  SOLVER_BRAILLE,
  SOLVER_MORSE,
  SOLVER_SEMAPHORE,
  SOLVER_ALPHA_SHIFT,
} from '../../constants';
import BrailleSolver from '../../components/BrailleSolver';
import AlphaShifter from '../../components/AlphaShifter';

export default compose(
  withStateHandlers(
    { selectedSolver: SOLVER_ALPHA_SHIFT },
    {
      selectBraille: () => () => ({ selectedSolver: SOLVER_BRAILLE }),
      selectMorse: () => () => ({ selectedSolver: SOLVER_MORSE }),
      selectSemaphore: () => () => ({ selectedSolver: SOLVER_SEMAPHORE }),
      selectAlphaShifter: () => () => ({ selectedSolver: SOLVER_ALPHA_SHIFT }),
    },
  ),
  withProps(({ selectedSolver }) => {
    switch (selectedSolver) {
      case SOLVER_BRAILLE:
        return { SolverComponent: BrailleSolver, themeColor: 'pink' };
      case SOLVER_ALPHA_SHIFT:
        return { SolverComponent: AlphaShifter, themeColor: '#c8a2c8' };
      default:
        return { SolverComponent: BrailleSolver, themeColor: 'pink' };
    }
  }),
);
