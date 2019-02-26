import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store, StateDecorator } from '@sambego/storybook-state'
import { Box, Modal, Button } from '../src'

const store = new Store({
  showModal: false
})

storiesOf('Modal', module)
  .addDecorator(StateDecorator(store))
  .add('default', () => state => (
    <State store={store}>
      <Box>
        <Modal
          showModal={state.showModal}
          onTriggerClose={() => store.set({ showModal: false })}
        />
        <Button onClick={() => store.set({ showModal: true })}>
          Show Modal
        </Button>
      </Box>
    </State>
  ))
