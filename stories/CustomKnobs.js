import { number, object } from '@storybook/addon-knobs';

function data(defaultArray) {
  const defaultObject = {
    label: 'label',
    value: 10,
  };
  const num = number('Number of data', defaultArray.length);
  const dataArray = [defaultObject];
  for (let i = 0; i < num; i += 1) {
    dataArray[i] = object(`data index ${i}`, (defaultArray[i] ? defaultArray[i] : defaultObject));
  }
  return dataArray;
}


const Knobs = {
  data,
};

export {
  data,
};

export default Knobs;
