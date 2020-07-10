export const brailleToLatin = {
  '100000': 'A',
  '100010': 'K',
  '100011': 'U',
  '100100': 'E',
  '100110': 'O',
  '100111': 'Z',
  '101000': 'B',
  '101010': 'L',
  '101011': 'V',
  '101100': 'H',
  '101110': 'R',
  '110000': 'C',
  '110010': 'M',
  '110011': 'X',
  '110100': 'D',
  '110110': 'N',
  '110111': 'Y',
  '111000': 'F',
  '111010': 'P',
  '111100': 'G',
  '111110': 'Q',
  '011000': 'I',
  '011100': 'J',
  '011010': 'S',
  '011110': 'T',
  '011101': 'W',
};

export const getBinary = (val) => (val ? 1 : 0);

export default {
  getBinary,
};
