import React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <div>
      <h1>About me:</h1>
      <p>Something about me page.</p>
      <p>
        Did you like it? <Link to="/contact">contact me</Link>
      </p>
    </div>
  );
};

export default AboutPage;
