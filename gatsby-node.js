const data = require("./src/data/pageData");
const path = require("path");

// https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  data.forEach((page) => {
    createPage({
      path: page.slug,
      component: path.resolve(`./src/templates/Generic.js`),
      context: {
        title: page.title,
        description: page.description,
      },
    });
  });

  const mdPages = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              slug
              description
            }
          }
        }
      }
    }
  `);

  console.log(mdPages);
  mdPages.data.allMarkdownRemark.edges.map(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/Markdown.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
}; 
