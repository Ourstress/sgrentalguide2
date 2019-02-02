// @flow

import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

type dataQuery = {
  allMarkdownRemark: {
    totalCount: number,
    edges: nodeObject[],
  },
  allAirtable: {
    totalCount: number,
    edges: airtableNodeObject[],
  },
}
type nodeObject = { node: nodeContent }

type nodeContent = {
  id: string,
  frontmatter: frontmatter,
  excerpt: string,
  fields: fields,
}
type frontmatter = {
  title: string,
  date: string,
}
type fields = {
  slug: string,
}

type airtableNodeObject = {
  node: airtableNodeField,
}
type airtableNodeField = {
  id: string,
  data: airtableDataField,
}
type airtableDataField = {
  Slug: string,
  Name: string,
}
const SecondPage = ({ data }: { data: dataQuery }) => (
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
    <h4>{data.allAirtable.totalCount} Posts</h4>
    {data.allAirtable.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.data.Slug}>
          <h3>{node.data.Name}</h3>
        </Link>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default SecondPage

export const query = graphql`
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
    allAirtable {
      totalCount
      edges {
        node {
          id
          data {
            Slug
            Name
          }
        }
      }
    }
  }
`

// static query doesn't work but pageQuery does for flow-runtime!
// const SecondPage = ({ data: dataQuery }) => (
//   <StaticQuery
// query={graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `}
//     render={data => (
// <Layout>
//   <SEO title="Pandas" />
//   <h1>All about happy pandas</h1>
//   <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
//   {data.allMarkdownRemark.edges.map(({ node }) => (
//     <div key={node.id}>
//       <Link to={node.fields.slug}>
//         <h3>{node.frontmatter.title}</h3>
//       </Link>
//       <p>{node.excerpt}</p>
//     </div>
//   ))}
//   <Link to="/">Go back to the homepage</Link>
// </Layout>
//     )}
//   />
// )
