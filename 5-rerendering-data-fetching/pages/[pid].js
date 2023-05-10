import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";


function ProductDetailPage(props) {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
      { params: { pid: "p4" } },
      { params: { pid: "p5" } },
      { params: { pid: "p6" } },
      { params: { pid: "p7" } },
      { params: { pid: "p8" } },
      { params: { pid: "p9" } },
      { params: { pid: "p10" } }
    ],
    fallback: false,
  };
}
export default ProductDetailPage;
