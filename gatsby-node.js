const path = require("path");

module.exports = {
  // It's used only to created slugs for markdown posts
  // onCreateNode: ({ node, actions }) => {
  //   const { createNodeField } = actions;

  //   if (node.internal.type === "MarkdownRemark") {
  //     const slug = path.basename(node.fileAbsolutePath, ".md");

  //     createNodeField({
  //       node,
  //       name: "slug",
  //       value: slug,
  //     });
  //   }
  // },

  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplatePath = path.resolve(
      __dirname,
      "src",
      "templates",
      "Blog",
      "index.jsx"
    );

    //This was used for fetching markdown posts, that we're no longer using.
    // const response = await graphql(`
    //   query {
    //     allMarkdownRemark {
    //       edges {
    //         node {
    //           fields {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }
    // `);

    const response = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    response.data.allContentfulBlogPost.edges.map(edge => {
      createPage({
        component: blogTemplatePath,
        path: `/blog/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
        },
      });
    });
  },
};
