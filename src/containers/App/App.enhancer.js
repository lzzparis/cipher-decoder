import { compose, withStateHandlers, withProps } from 'recompose';
import {
  SOLVER_BRAILLE,
  SOLVER_MORSE,
  SOLVER_SEMAPHORE,
} from '../../constants';
import BrailleSolver from '../../components/BrailleSolver';

export default compose(
  withStateHandlers(
    { selectedSolver: SOLVER_BRAILLE },
    {
      selectBraille: () => () => ({ selectedSolver: SOLVER_BRAILLE }),
      selectMorse: () => () => ({ selectedSolver: SOLVER_MORSE }),
      selectSemaphore: () => () => ({ selectedSolver: SOLVER_SEMAPHORE }),
    },
  ),
  withProps(({ selectedSolver }) => {
    switch (selectedSolver) {
      case SOLVER_BRAILLE:
        return { SolverComponent: BrailleSolver, themeColor: 'pink' };
      default:
        return { SolverComponent: BrailleSolver, themeColor: 'pink' };
    }
  }),
);
