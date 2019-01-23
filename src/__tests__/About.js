import React from 'react'
import { render } from 'react-testing-library'
import About from '../pages/About'

describe('About', () => {
  it('renders correctly', () => {
    const location = {
      pathname: '/About',
    }
    const { getByText } = render(<About location={location} />)
    expect(getByText(/bout/)).toBeInTheDocument()
  })
})
