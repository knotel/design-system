import React from 'react'
import { storiesOf } from '@storybook/react'
import Map from '../src/index'

const TOKEN =
  'pk.eyJ1Ijoia25vdGVsIiwiYSI6ImNqb2tpdnQ3eDBnaG0zd21oeHJ5M2VtbGsifQ.2UspOJExjaZu1c6YE9g91w'
const width = 400
const height = 400
const zoom = 12
const lat = 52.49
const lng = 13.38
const style = 'mapbox://styles/knotel/cjrifpffx9d5f2sq3akog820z'

storiesOf('Map', module).add('Basic', () => (
  <Map
    latitude={lat}
    longitude={lng}
    zoom={zoom}
    height={height}
    width={width}
    dragRotate={false}
    touchRotate={false}
    mapboxApiAccessToken={TOKEN}
    mapStyle={style}
  />
))
