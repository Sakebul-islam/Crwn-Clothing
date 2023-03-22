import { createContext, useState, useEffect } from "react";

// addCollectionAndDocuments,
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoaryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoaryMap();
  }, []);

  const valu = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={valu}>
      {children}
    </CategoriesContext.Provider>
  );
};
