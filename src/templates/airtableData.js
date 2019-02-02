import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

export default ({ data }) => {
  const post = data.airtable.data
  return (
    <Layout>
      <div>
        <h1>{post.Name}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.Notes }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    airtable(data: { Slug: { eq: $slug } }) {
      data {
        Notes
        Exercise
        Answer
        Name
        Slug
        References
      }
    }
  }
`
