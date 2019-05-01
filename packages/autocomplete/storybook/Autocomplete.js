import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Text, Icon } from 'pcln-design-system'
import catNames from 'cat-names'
import Component from '@reach/component-component'
import { Autocomplete, Label, Input, Menu, Item } from '../src'

const cats = catNames.all
const match = (item, value) => item.includes(value)

storiesOf('Autocomplete', module).add('default', () => (
  <Component
    initialState={{ value: '' }}
    children={({ state, setState }) => (
      <Box>
        <Autocomplete
          onChange={item => {
            setState({ value: item })
          }}
          match={match}
        >
          <Label mb={1}>Cat</Label>
          <Input />
          <Menu>
            {cats.map(cat => (
              <Item key={cat} item={cat}>
                <Icon name="Pin" color="blue" mr={2} />
                <Text fontSize={0}>{cat}</Text>
              </Item>
            ))}
          </Menu>
        </Autocomplete>
        <Text my={2}>
          This text should be covered up by the Autocomplete.Menu when open.
        </Text>
        <Text my={2}>
          The current value is <code>{state.value}</code>
        </Text>
      </Box>
    )}
  />
))
