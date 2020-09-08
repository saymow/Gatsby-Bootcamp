const path = require("path");

module.exports = {
  onCreateNode: ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
      const slug = path.basename(node.fileAbsolutePath, ".md");

      createNodeField({
        node,
        name: "slug",
        value: slug,
      });
    }
  },

  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplatePath = path.resolve(
      __dirname,
      "src",
      "templates",
      "Blog",
      "index.jsx"
    );

    const response = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    response.data.allMarkdownRemark.edges.map(edge => {
      createPage({
        component: blogTemplatePath,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });
  },
};
