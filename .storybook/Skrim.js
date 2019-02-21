import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store, StateDecorator } from "@sambego/storybook-state";
import { Box, Skrim, Button } from '../src'

const store = new Store({
  showSkrim: false
});

storiesOf('Skrim', module)
  .addDecorator(StateDecorator(store))
  .add('Skrim', () => state => (
    <State store={store}>
      <Box>
          {state.showSkrim && <Skrim onClick={() => store.set({ showSkrim: false})} />}
          <Button onClick={() => store.set({ showSkrim: true})}>Show Skrim</Button>
      </Box>
    </State>
  ))
