'use client'

import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
import Link from "next/link";

export default function Page() {
  // const [loading, setLoading] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [cupcakes, setCupcakesData] = useState([]);
  // const [error, setError] = useState(null);

  // const typeFilter = searchParams.get("type");

  // useEffect(() => {
  //   async function loadCupcakes() {
  //     setLoading(true);
  //     try {
  //       const data = await getCupcakes();
  //       setCupcakesData(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadCupcakes();
  // }, []);

  // const displayedCupcakes = typeFilter
  //   ? cupcakes.filter((cupcake) => cupcake.type == typeFilter)
  //   : cupcakes;
  // const cupcakesElements = displayedCupcakes.map((v) => (
  //   <Link
  //     key={v.id}
  //     state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
  //     to={`${v.id}`}
  //   >
  //     {" "}
  //     <div
  //       name={v.name}
  //       price={v.price}
  //       image={v.imageUrl}
  //       type={v.type}
  //     ></div>{" "}
  //   </Link>
  // ));

  // console.log(cupcakes);
  return (
    <section>
      <section>
        <h2>Shop</h2>
        <Link href="/">Show All</Link>
        <Link href="/">Regular</Link>
        <Link href="/">Specials</Link>
      </section>

      {/* <section>{cupcakesElements}</section> */}
    </section>
  );
}
