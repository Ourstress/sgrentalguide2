// @flow

import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'

const Files = data => {
  return (
    <div>
      <h3>Files.jsx</h3>
      <p>{data.allFile.edges[0].node.relativePath}</p>
    </div>
  )
}

// The query is run in about.js instead
// const Files = ({ data }: { data: dataQuery }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allFile {
//           edges {
//             node {
//               id
//               relativePath
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div>
// <h3>Files.jsx</h3>
// <p>{data.allFile.edges[0].node.relativePath}</p>
//       </div>
//     )}
//   />
// )

export default Files
