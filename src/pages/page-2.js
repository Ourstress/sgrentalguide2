// @flow

import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

type dataQuery = {
  allMarkdownRemark: {
    totalCount: number,
    edges: nodeObject[],
  },
}
type nodeObject = { node: nodeContent }

type nodeContent = {
  id: string,
  frontmatter: frontmatter,
  excerpt: string,
}
type frontmatter = {
  title: string,
  date: string,
}

const SecondPage = ({ data: dataQuery }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Pandas" />
        <h1>All about happy pandas</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )}
  />
)

export default SecondPage
