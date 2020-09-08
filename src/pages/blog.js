import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

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
            fields {
              slug
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
            <Link to={`/blog/${data.node.fields.slug}`}>
              <h2>Title: {data.node.frontmatter.title}</h2>
              <p>CreatedAt: {data.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
