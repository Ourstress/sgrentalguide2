const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allAirtable {
        edges {
          node {
            data {
              Slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
    result.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: node.data.Slug,
        component: path.resolve(`./src/templates/airtableData.js`),
        context: {
          slug: node.data.Slug,
        },
      })
    })
  })
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allAirtable {
//         edges {
//           node {
//             data {
//               Slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allAirtable.edges.forEach(({ node }) => {
//       createPage({
//         path: node.data.Slug,
//         component: path.resolve(`./src/templates/airtableData.js`),
//         context: {
//           slug: node.data.Slug,
//         },
//       })
//     })
//   })
// }
