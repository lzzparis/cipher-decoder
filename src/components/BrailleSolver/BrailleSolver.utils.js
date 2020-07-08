import findKey from 'lodash/findKey';
import sample from 'lodash/sample';
// import pick from 'lodash/pick';

import { latinToBraille } from '../../constants';

export const getBinary = (val) => (val ? 1 : 0);

export const lookupBraille = (inputBrailleBin) => {
  console.log('lzz looking up', inputBrailleBin, typeof inputBrailleBin, typeof sample(latinToBraille).brailleBin)
  const latinLetter = findKey(latinToBraille, ({ brailleBin }) => brailleBin === inputBrailleBin);
  return latinLetter;
};

export default {
  lookupBraille,
};
