import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Marker } from '../src'

storiesOf('Marker', module)
  .add(
    'Marker component',
    withInfo({
      inline: true,
      text: 'Use the <Marker /> component to render a primitive Marker.'
    })(() => <Marker bg="blue">A</Marker>)
  )
  .add('All colors', () => (
    <div>
      <Marker bg="blue">A</Marker>
      <Marker bg="blue">C</Marker>
      <Marker bg="blue">e</Marker>

      <Marker bg="orange">B</Marker>
      <Marker bg="green">G</Marker>
      <Marker bg="orange">Z</Marker>

      <Marker bg="text" color="white">
        +
      </Marker>
    </div>
  ))
  .add('blue', () => <Marker bg="blue">A</Marker>)
  .add('green', () => <Marker bg="green">6</Marker>)
  .add('lightGreen', () => <Marker bg="lightGreen">G</Marker>)
  .add('red', () => <Marker bg="red">1</Marker>)
  .add('orange', () => <Marker bg="orange">J</Marker>)
  .add('lightOrange', () => <Marker bg="lightOrange">F</Marker>)
  .add('gray', () => <Marker bg="gray">S</Marker>)
  .add('L', () => <Marker bg="gray50">L</Marker>)
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
