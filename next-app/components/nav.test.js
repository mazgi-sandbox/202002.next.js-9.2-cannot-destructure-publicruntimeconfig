/* eslint-disable no-undef */
import Nav from './nav'
import React from 'react'
import { shallow } from 'enzyme'

// See https://spectrum.chat/next-js/general/how-to-setup-jest-tests-to-use-publicruntimeconfig~27f8cee1-d4a4-4b68-bb62-ea6562a77544
// jest.mock('next/config', () => () => ({ publicRuntimeConfig: {} }))

describe('Template default', () => {
  const nav = shallow(<Nav />)

  it('render the nav', () => {
    expect(nav.contains(<p>not-exist</p>)).not.toBeTruthy()
  })
})
