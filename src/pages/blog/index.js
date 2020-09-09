import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../../components/Layout";

import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <h2>Available posts: </h2>
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(post => {
          return (
            <li key={post.node.title} className={blogStyles.post}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>Title: {post.node.title}</h2>
                <p>CreatedAt: {post.node.publishDate}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BlogPage;
