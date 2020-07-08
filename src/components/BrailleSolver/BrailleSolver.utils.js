import findKey from 'lodash/findKey';

import { latinToBraille } from '../../constants';

export const getBinary = (val) => (val ? 1 : 0);

export const lookupBraille = (inputBrailleBin) => {
  const latinLetter = findKey(latinToBraille, ({ brailleBin }) => brailleBin === inputBrailleBin);
  return latinLetter;
};

export default {
  lookupBraille,
};
