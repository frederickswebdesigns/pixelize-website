/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
          edges {
            node {
              frontmatter {
                slug
                thumbnail
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          thumbnail: `../${node.frontmatter.thumbnail}`,
          component: path.resolve(`./src/components/postLayout.js`),
          context: {
            slug: node.frontmatter.slug,
            thumbnail: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
