import React from "react";
import { Link } from "gatsby";

import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About me:</h1>
      <p>Something about me page.</p>
      <p>
        Did you like it? <Link to="/contact">contact me</Link>
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;
