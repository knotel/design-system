import React from 'react'
import { storiesOf } from '@storybook/react'
import Collapsable from '../src/index'

import Card from '../../core/src/Card'
import Banner from '../../core/src/Banner'
import Heading from '../../core/src/Heading'
import Text from '../../core/src/Text'

const header = (
  <Banner textAlign="left" p={2} bg="blue" showIcon={false}>
    Hello?
  </Banner>
)
storiesOf('Collapsable', module).add('Basic', () => (
  <Collapsable trigger={header} width={['100px', '200px', '500px']}>
    <Card p={2}>
      <Heading>Hi!</Heading>
      <Text>How're you?</Text>
    </Card>
  </Collapsable>
))
