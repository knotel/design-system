import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { FluidText } from '../src'

storiesOf('FluidText', module)
  .add(
    'Typography component',
    withInfo({
      inline: true,
      text:
        'A low-level component for setting font-size, typographic styles, margin, and color'
    })(() => <FluidText m={3}>Hello</FluidText>)
  )
  .add('fontSize', () => (
    <div>
      <FluidText fontSize={6}>Hello 6</FluidText>
      <FluidText fontSize={5}>Hello 5</FluidText>
      <FluidText fontSize={4}>Hello 4</FluidText>
      <FluidText fontSize={3}>Hello 3</FluidText>
      <FluidText fontSize={2}>Hello 2</FluidText>
      <FluidText fontSize={1}>Hello 1</FluidText>
      <FluidText fontSize={0}>Hello 0</FluidText>
    </div>
  ))
  .add('textAlign', () => (
    <div>
      <FluidText textAlign="left">Hello Left</FluidText>
      <FluidText textAlign="center">Hello Center</FluidText>
      <FluidText textAlign="right">Hello Right</FluidText>
    </div>
  ))
  .add('regular', () => <FluidText regular>Hello Regular</FluidText>)
  .add('bold', () => <FluidText bold>Hello Bold</FluidText>)
  .add('caps', () => <FluidText caps>Hello Caps</FluidText>)
  .add('italic', () => <FluidText italic>Hello italic</FluidText>)
  .add('strikethrough', () => <FluidText.s>Hello Strikethrough</FluidText.s>)
  .add('margin', () => (
    <FluidText mt={4} mb={2}>
      Hello Margin
    </FluidText>
  ))
  .add('color', () => (
    <div>
      <FluidText color="blue">Hello Blue</FluidText>
      <FluidText color="green">Hello Green</FluidText>
    </div>
  ))
