import findKey from 'lodash/findKey';
// import pick from 'lodash/pick';
import { latinToBraille } from '../../constants';

export const lookupBraille = (formResults) => {
  const inputBrailleBin = formResults;
  const latinLetter = findKey(latinToBraille, ({ brailleBin }) => brailleBin === inputBrailleBin);
  return latinLetter;
};

export default {
  lookupBraille,
};
