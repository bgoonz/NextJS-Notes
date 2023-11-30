import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    "https://nextjs-756cd-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((response) => response.json()),
  );
  console.log(data);
  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load</p>;
  }
  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  //cannot use useSWR because this function is not a react component

  const response = await fetch(
    "https://nextjs-756cd-default-rtdb.firebaseio.com/sales.json",
  )
    .then((response) => response.json())
    .then((data) => {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      return transformedSales;
    });
  return {
    props: {
      sales: response,
    },
    revalidate: 10,
  };
}

export default LastSalesPage;
