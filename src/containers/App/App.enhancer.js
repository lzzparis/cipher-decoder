import { compose, withStateHandlers, withProps } from 'recompose';
import {
  SOLVER_BRAILLE,
  SOLVER_MORSE,
  SOLVER_SEMAPHORE,
  SOLVER_CAESAR_SHIFT,
} from '../../constants';
import BrailleSolver from '../../components/BrailleSolver';
import CaesarShift from '../../components/CaesarShift';

export default compose(
  withStateHandlers(
    { selectedSolver: SOLVER_CAESAR_SHIFT },
    {
      selectBraille: () => () => ({ selectedSolver: SOLVER_BRAILLE }),
      selectMorse: () => () => ({ selectedSolver: SOLVER_MORSE }),
      selectSemaphore: () => () => ({ selectedSolver: SOLVER_SEMAPHORE }),
      selectCaesarShift: () => () => ({ selectedSolver: SOLVER_CAESAR_SHIFT }),
    },
  ),
  withProps(({ selectedSolver }) => {
    switch (selectedSolver) {
      case SOLVER_BRAILLE:
        return { SolverComponent: BrailleSolver, themeColor: 'pink' };
      case SOLVER_CAESAR_SHIFT:
        return { SolverComponent: CaesarShift, themeColor: '#c8a2c8' };
      default:
        return { SolverComponent: BrailleSolver, themeColor: 'pink' };
    }
  }),
);
