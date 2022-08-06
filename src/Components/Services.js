import React, { useEffect, useState } from "react";
import axios from "axios";
import Service from "./Service";
import fatcher from "./../dataApi/Fatcher";

const Services = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    /*   axios.get("https://enigmatic-shore-65172.herokuapp.com/products").then(res=>setProduct(res.data)) */

    // another way

    (async () => {
      const res = await axios.get(
        "https://enigmatic-shore-65172.herokuapp.com/products"
      );
      setProduct(res.data);
    })();

    //Another way

    /* fatcher.get("/products").then(res=>setProduct(res.data)) */
  }, []);
  //console.log(services)
  return (
    <div className="sm:container sm:mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-16">
      {products.map((service) => (
        <Service
          index={service.id}
          products={products}
          setProduct={setProduct}
          service={service}
        ></Service>
      ))}
    </div>
  );
};

export default Services;
