import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact page</h1>
      <p>
        Here is my{" "}
        <a href="https://github.com/saymow" target="_blank">
          Github profile
        </a>
        , check it out!
      </p>
      <Footer />
    </div>
  );
};

export default ContactPage;
