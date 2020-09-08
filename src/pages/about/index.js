import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me:</h1>
      <p>Something about me page.</p>
      <p>
        Did you like it? <Link to="/contact">contact me</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
