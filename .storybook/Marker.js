import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Marker } from '../src'

storiesOf('Marker', module).add(
  'Marker component',
  withInfo({
    inline: true,
    text: 'Use the <Marker /> component to render a primitive Marker.'
  })(() => <Marker bg="blue">A</Marker>)
)
// .add('All colors', () => (
//   <div>
//     <Marker bg="blue">A</Marker>
//     <Marker bg="blue">C</Marker>
//     <Marker bg="blue">e</Marker>

//     <Marker bg="orange">B</Marker>
//     <Marker bg="green">G</Marker>
//     <Marker bg="orange">Z</Marker>

//     {/* <Marker bg="text" color="white">
//       text (custom)
//     </Marker> */}
//   </div>
// ))
// .add('default', () => <Marker>default</Marker>)
// .add('blue', () => <Marker bg="blue">blue</Marker>)
// .add('lightBlue', () => <Marker bg="lightBlue">lightBlue</Marker>)
// .add('green', () => <Marker bg="green">green</Marker>)
// .add('lightGreen', () => <Marker bg="lightGreen">lightGreen</Marker>)
// .add('red', () => <Marker bg="red">red</Marker>)
// .add('lightRed', () => <Marker bg="lightRed">lightRed</Marker>)
// .add('orange', () => <Marker bg="orange">orange</Marker>)
// .add('lightOrange', () => <Marker bg="lightOrange">lightOrange</Marker>)
// .add('text (custom)', () => (
//   <Marker bg="text" color="white">
//     text (custom)
//   </Marker>
// ))
// .add('lightBlue and text (custom)', () => (
//   <Marker bg="lightBlue" color="text">
//     lightBlue and text (custom)
//   </Marker>
// ))
