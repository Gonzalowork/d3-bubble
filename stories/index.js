import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';
import { data } from './CustomKnobs';
import { action } from '@storybook/addon-actions';

import BubbleChart from '../components/BubbleChart/TestBubbleChart';

storiesOf('Charts', module)
  .addDecorator(withKnobs)
  .add('BubbleChart', () => (
    <BubbleChart
      width={number('Width', 800)}
      height={number('Height', 800)}
      fontFamily={text('Font Family', 'Arial')}
      data={data([
        { label: 'CRM', value: 1 },
        { label: 'API', value: 4 },
        { label: 'Data', value: 2 },
        { label: 'Commerce', value: 7 },
        { label: 'AI', value: 3 },
        { label: 'Management', value: 5 },
        { label: 'Testing', value: 6 },
        { label: 'Mobile', value: 9 },
        { label: 'Conversion', value: 9 },
        { label: 'Misc', value: 14 },
        { label: 'Databases', value: 17 },
        { label: 'DevOps', value: 22 },
        { label: 'Javascript', value: 18 },
        { label: 'Languages / Frameworks', value: 20 },
        { label: 'Front End', value: 25 },
        { label: 'Content', value: 30 },
      ])}
    />
  ))
