import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTh, FaBars } from "react-icons/fa";
import { categories } from "../data/categories";
import axios from "axios"; // Import axios

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewType, setViewType] = useState("grid");
  const [cardSize, setCardSize] = useState(200);
  const [connectionStatus, setConnectionStatus] = useState(""); // New state for connection status
  const [productCount, setProductCount] = useState(0); // New state for product count

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Using axios to fetch data
        setProducts(response.data); // Axios stores response data in response.data
        setProductCount(response.data.length); // Update product count
        setConnectionStatus("Connection successful. Products loaded."); // Success message
      } catch (error) {
        setConnectionStatus(`Failed to connect to the database: ${error.message}`); // Error message
      }
    };
    
    fetchProducts();
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) => selectedCategories.includes(product.category))
    : products;

  return (
    <div className="main-container flex p-4">
      <div className="categories-container w-64 mr-8">
        <div className="categories-column p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Категории</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="products-container flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-sm text-gray-700">{connectionStatus}</p>
          {productCount > 0 && <p>Number of products: {productCount}</p>}
        </div>

        <div className="view-toggle mb-4 flex justify-end items-center">
          <button
            onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
            className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 mr-4"
          >
            {viewType === "grid" ? <FaBars /> : <FaTh />}
          </button>

          <label className="mr-4">Размер карточек</label>
          <input
            type="range"
            min="150"
            max="300"
            value={cardSize}
            onChange={(e) => setCardSize(e.target.value)}
            className="slider"
          />
        </div>

        <div
          className={`products-section ${viewType === "grid" ? "grid gap-4" : "block"}`}
          style={{
            gridTemplateColumns: viewType === "grid" && cardSize >= 150
              ? `repeat(auto-fit, minmax(${cardSize}px, 1fr))`
              : "none",
            gridAutoRows: "minmax(250px, auto)",
            justifyItems: "center",
            rowGap: "16px",
          }}
        >
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card">
              <img alt={product.image_alt} src={product.image_src} />
              <div className="product-text">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
