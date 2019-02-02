import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from './Counter'

describe('Counter', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Counter />)
    expect(getByText(/counter/i)).toBeInTheDocument()
  })
  it('click on button causes number 1 to appear', () => {
    const { getByText, debug } = render(<Counter />)
    const button = getByText(/Click to increase count!/)
    fireEvent.click(button)
    debug()
    expect(getByText(/1/)).toBeInTheDocument()
  })
})
