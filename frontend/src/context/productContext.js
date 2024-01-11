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

  const getProductList = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      setProductList(responseJson.products);
    }
  };

  const getProducts = async () => {
    const response = await fetch("/api/v1/products?all=true");
    const responseJson = await response.json();
    if (responseJson) {
      setProducts(responseJson.products);
    }
  };

  const getBrands = async () => {
    var brandsArray = [];
    brandsArray.push(products[0].company);
    for (var i = 1; i < products.length; i++) {
      var isEqual = false;
      for (var x = 0; x < brandsArray.length; x++) {
        if (products[i].company === brandsArray[x]) {
          isEqual = true;
        }
      }
      if (isEqual === false) {
        brandsArray.push(products[i].company);
      }
    }
    setBrands(brandsArray);
  };

  const getAmountBrandProducts = async () => {
    for (var i = 0; i < brands.length; i++) {
      const response = await fetch(`/api/v1/products?company=${brands[i]}`);
      const responseJson = await response.json();
      if (responseJson) {
        setAmountBrandProducts((old) => [...old, responseJson.amount]);
      }
    }
  };

  useEffect(() => {
    getProductList(urlState);
    getProducts();
  }, []);

  useEffect(() => {
    getBrands();
  }, [products]);

  useEffect(() => {
    getAmountBrandProducts();
  }, [brands]);

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: urlState,
      query: {
        name: search || undefined,
        company: brandFilter,
        featured: featuredFilter,
        sort: orderingFilter,
      },
    });
    setUrlState(url);
    if (maxFilter != "" && minFilter != "") {
      var filteredList = productList.filter(
        (product) => product.price >= minFilter && product.price <= maxFilter
      );
      setProductList(filteredList);
      console.log(productList);
    } else {
      getProductList(url);
    }
  }, [
    search,
    brandFilter,
    orderingFilter,
    featuredFilter,
    minFilter,
    maxFilter,
  ]);

  useEffect(() => {
    getProductList(urlState);
  }, [urlState]);

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        products,
        setProducts,
        brandFilter,
        setBrandFilter,
        getProductList,
        brands,
        amountBrandProducts,
        search,
        setSearch,
        checked,
        setChecked,
        urlState,
        setUrlState,
        orderingFilter,
        setOrderingFilter,
        featuredFilter,
        setFeaturedFilter,
        setMinFilter,
        setMaxFilter,
        minFilter,
        maxFilter,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
