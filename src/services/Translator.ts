import IMappings from '../interfaces/IMappings';

const Translator = (input: string, mapping: IMappings) => {
  if (input.length === 0) {
    return '';
  }

  let result = '';
  let i = 0;

  while (i < input.length) {
    const mappingKeyLen2 = mapping[input.substring(i, i + 2)];
    if (i < input.length - 1 && mappingKeyLen2) {
      result += mappingKeyLen2;
      i += 2;
    } else {
      const mappingKeyLen1 = mapping[input.substring(i, i + 1)];
      if (mappingKeyLen1) {
        result += mappingKeyLen1;
        i += 1;
      } else {
        result += input[i];
        i += 1;
      }
    }
  }
  return result;
};

export const getStringMappings = (): IMappings => {
  return {
    a: 'bird',
    b: 'foot ',
    c: 'cane ',
    d: 'hand ',
    e: 'reeds ',
    f: 'snake ',
    g: 'otherSnake ',
    h: 'rope ',
    i: 'reed ',
    j: 'otherSnake ',
    t: 'bowl ',
    th: 'basket ',
  };
};

const getImageMappings = (): IMappings => {
  //CHANGE TO IMAGE PATHS
  return {
    a: 'bird',
    b: 'foot ',
    c: 'cane ',
    d: 'hand ',
    e: 'reeds ',
    f: 'snake ',
    g: 'otherSnake ',
    h: 'rope ',
    i: 'reed ',
    j: 'otherSnake ',
    t: 'bowl ',
    th: 'basket ',
  };
};

export default Translator;
