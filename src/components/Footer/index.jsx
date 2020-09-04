import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetaData {
          author
        }
      }
    }
  `);

  return (
    <footer>
      <p>Created by {data.site.siteMetaData.author}, © 2020</p>
    </footer>
  );
}

export default Footer;
