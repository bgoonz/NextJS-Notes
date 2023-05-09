import React from "react";

function HomePage(props) {
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [],
    },
  };
}

export default HomePage;
