/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'


describe('With Snapshot Testing', () => {
  it('App shows "Menu"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})