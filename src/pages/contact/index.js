import React from "react";

import Layout from "../../components/Layout";
import Head from "../../components/Head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact page</h1>
      <p>
        Here is my{" "}
        <a href="https://github.com/saymow" target="_blank" rel="noreferrer">
          Github profile
        </a>
        , check it out!
      </p>
    </Layout>
  );
};

export default ContactPage;
