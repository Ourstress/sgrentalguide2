// @flow

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Files from './Files'

type dataQuery = {
  site: {
    siteMetadata: {
      title: string,
    },
  },
  allFile: {
    edges: node[],
  },
}

type node = {
  node: {
    id: string,
    relativePath: string,
  },
}

const SiteTitle = data => {
  return (
    <div>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  )
}

const About = ({ data }: { data: dataQuery }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allFile {
          edges {
            node {
              id
              relativePath
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h3>Hello</h3>
        <SiteTitle {...data} />
        <Files {...data} />
      </div>
    )}
  />
)
export default About

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// ` //Don't forget this template string!!!
