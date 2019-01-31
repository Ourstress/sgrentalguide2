import React from 'react'
import { render } from 'react-testing-library'
import About from '../pages/About'

describe('About', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
      allFile:{edges:[{node:{id:"123", relativePath:"pathy"}}]}
    }
    const location = {
      pathname: '/About',
    }
    const { getByText } = render(<About location={location} data={data}  />)
    expect(getByText(/Default/)).toBeInTheDocument()
  })
})
