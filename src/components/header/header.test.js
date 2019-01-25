import React from 'react'
import { render } from 'react-testing-library'
import Header from './header'

describe('Header', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header siteTitle="hello" />)
    expect(getByText(/hello/)).toBeInTheDocument()
  })
})
