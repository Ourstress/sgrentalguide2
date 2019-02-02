// @flow

import React from 'react'
import { graphql, Link } from 'gatsby'
import Files from '../components/Files'
import Counter from '../components/random/Counter'

type dataQuery = {
  site: siteObject,
  allFile: allFileObject,
}
type siteObject = {
  siteMetadata: siteMetadataObject,
}
type siteMetadataObject = {
  title: string,
}
type allFileObject = {
  edges: nodeObject[],
}
type nodeObject = {
  node: node,
}
type node = {
  id: string,
  relativePath: string,
}

const SiteTitle = (data: dataQuery) => {
  return (
    <div>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  )
}

const About = ({ data }: { data: dataQuery }) => (
  <div>
    <h3>Hello</h3>
    <SiteTitle {...data} />
    <Files {...data} />
    <Counter />
    <Link to="/">Back to HomePage </Link>
  </div>
)
export default About

export const query = graphql`
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
` //Don't forget this template string!!!
