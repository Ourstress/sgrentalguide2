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
}

const SiteTitle = ({ data }: { data: dataQuery }) => (
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
        <p>{data.site.siteMetadata.title}</p>
      </div>
    )}
  />
)

const About = () => (
  <div>
    <h3>Hello</h3>
    <SiteTitle />
    <Files />
  </div>
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
