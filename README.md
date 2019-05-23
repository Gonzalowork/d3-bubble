## BubbleChart

Clone the repo and install the dependencies.
```sh
npm install
```

Run storybook to see the demo of the component.
```sh
npm run storybook
```

The **BubbleChart** Component it's in:
```sh
/components/BubbleChart/
```

Example of implementation:

```javascript
<BubbleChart
  width={800}
  height={800}
  fontFamily="Arial"
  data={[
    { label: 'CRM', value: 1 },
    { label: 'API', value: 1 },
    { label: 'Data', value: 1 },
    { label: 'Commerce', value: 1 },
    { label: 'AI', value: 3 },
    { label: 'Management', value: 5 },
    { label: 'Testing', value: 6 },
    { label: 'Mobile', value: 9 },
    { label: 'Conversion', value: 9 },
    { label: 'Misc', value: 21 },
    { label: 'Databases', value: 22 },
    { label: 'DevOps', value: 22 },
    { label: 'Javascript', value: 23 },
    { label: 'Languages / Frameworks', value: 25 },
    { label: 'Front End', value: 26 },
    { label: 'Content', value: 26 },
  ]}
/>
```

The **data** prop receive and array of objects:
```javascript
{
  label: 'label', // Text to display.
  value: 1, // Numeric Value.
  /**
    Color of the circle this value it's optional,
    accept hex (#ff0000) and string (red) name values.
    If you don't provide a value the default behavior 
    is assign a color based on a d3.schemeCategory20c
    color schema.
  */
  color: '#ff00ff',
}
```
