import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <h1>Blog</h1>
      <h2>Available posts: </h2>
      <ul>
        {data.allMarkdownRemark.edges.map(data => (
          <li key={data.node.frontmatter.title}>
            Title: {data.node.frontmatter.title} <br />
            CreatedAt: {data.node.frontmatter.date}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
