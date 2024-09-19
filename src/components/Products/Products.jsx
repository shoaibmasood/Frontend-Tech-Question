import react, { useEffect, useState } from "react";

const Prodcut = () => {
  const PRODUCT_URL = "https://dummyjson.com/products";
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const response = await fetch(PRODUCT_URL);
    const result = await response.json();
    if (result && result.products.length > 0) {
      setData(result.products);
    }
  };

  const handleClick = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= data.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("data", data);
  return (
    <div className="Products">
      {data?.slice(page * 10 - 10, page * 10)?.map((prod) => (
        <div className="Item">
          <img src={prod.thumbnail} alt={prod.tile} />
          <span>{prod.id}</span>
          <span>{prod.title}</span>
        </div>
      ))}
      {data?.length > 0 && (
        <div>
          <span onClick={() => handleClick(page - 1)}>⬅️</span>
          {[...Array(data?.length / 10)]?.map((_, idx) => (
            <span onClick={() => handleClick(idx + 1)}>{idx + 1}</span>
          ))}
          <span onClick={() => handleClick(page + 1)}>➡️</span>️
        </div>
      )}
    </div>
  );
};

export default Prodcut;
