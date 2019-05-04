import React from 'react'
import { storiesOf } from '@storybook/react'
import Tabs from '../src'
import { Image } from 'pcln-design-system'

const images = [
  'https://via.placeholder.com/150/abcdef/111111?text=1',
  'https://via.placeholder.com/150/abcdef/111111?text=2',
  'https://via.placeholder.com/150/abcdef/111111?text=3'
]

const items = images.map((image, index) => <Image key={index} src={image} />)

const story = storiesOf('Tabs', module).add('Simple', () => {
  return (
    <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel />
      <TabPanel />
    </Tabs>
  )
})

export default story
