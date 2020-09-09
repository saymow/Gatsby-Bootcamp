import React from "react";
import { Link } from "gatsby";

import Head from "../components/Head";

import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Gustavo, a full-stack developer living in Betim, Mg.</h2>
      <p>
        Neeed a developer? <Link to="/about">Contact me</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

// Comments:

// The benefits of using Link instead of a regular anchor are the following:

// - Gatsby will intelligently prerender the linked-to content
// - State can be passed to the linked-to page
// - Custom styling or a custom class can be added to links when the active page corresponds with the link.
// - This is a bit more of an advanced use case, but the browser’s history object can be controlled when using the Link component.
