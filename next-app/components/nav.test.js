/* eslint-disable no-undef */
import Nav from './nav'
import React from 'react'
import { shallow } from 'enzyme'

describe('Template default', () => {
  const nav = shallow(<Nav />)

  it('render the nav', () => {
    expect(nav.contains(<p>not-exist</p>)).not.toBeTruthy()
  })
})
