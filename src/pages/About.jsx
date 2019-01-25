// @flow

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

type dataQuery = {
  site: {
    siteMetadata: {
      title: string,
    },
  },
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
      }
    `}
    render={data => (
      <div>
        <h3>About</h3>
        <p>{data.site.siteMetadata.title}</p>
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
