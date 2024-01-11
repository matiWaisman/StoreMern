import React, { useState, createContext, useEffect } from "react";
import qs from "query-string";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [amountBrandProducts, setAmountBrandProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [urlState, setUrlState] = useState("/api/v1/products?");
  const [orderingFilter, setOrderingFilter] = useState("");
  const [featuredFilter, setFeaturedFilter] = useState("");
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");

  // Obtén la URL del servidor desde la variable de entorno
  const serverUrl =
    process.env.REACT_APP_SERVER_URL || "https://store-server-eta.vercel.app";

  const getProductList = async (url) => {
    const response = await fetch(`${serverUrl}${url}`);
    const responseJson = await response.json();
    if (responseJson) {
      setProductList(responseJson.products);
    }
  };

  const getProducts = async () => {
    const response = await fetch(`${serverUrl}/api/v1/products?all=true`);
    const responseJson = await response.json();
    if (responseJson) {
      setProducts(responseJson.products);
    }
  };

  // ... (otras funciones)

  useEffect(() => {
    getProductList(urlState);
    // ... (otras llamadas a funciones)
  }, [urlState]);

  // ... (otros useEffect)

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        // ... (otros valores del contexto)
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
