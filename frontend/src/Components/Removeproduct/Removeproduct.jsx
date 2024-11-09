import './Removeproduct.css';
import React, { useEffect, useState } from 'react';
import delete1 from './Assets/delete1.png';
import Slider from '../ANavbar/Slider/Slider';
import Navbar from '../ANavbar/Navbar';

const RemoveProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredProduct, setFilteredProduct] = useState(null); // State for filtered product

  const fetchInfo = async () => {
    try {
      const response = await fetch('https://petadoption-tovi.onrender.com/allproducts');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError('Failed to fetch products');
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch('https://petadoption-tovi.onrender.com/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Failed to remove product with id ${id}`);
      }

      await fetchInfo(); // Refresh the product list after removal
      setFilteredProduct(null); // Clear the filtered product
    } catch (err) {
      console.error(`Error removing product with id ${id}:`, err);
      setError(`Error removing product with id ${id}`);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Search by ID functionality
  const handleSearch = () => {
    const product = allProducts.find((item) => item.id.toString() === searchQuery);
    setFilteredProduct(product);
  };

  return (
    <div>
      {/* <Navbar />
      <Slider /> */}

      <div className="listproduct">
      <div className="header">
  <h1>All Pet List</h1>
  {/* Search input and button */}
  <div className="search-container">
    <input
      type="text"
      placeholder="Search by ID"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
    <button onClick={handleSearch} className="search-button">
      Search
    </button>
  </div>
</div>


        {error && <p className="error-message">{error}</p>} {/* Display any errors */}

        <div className="list-all-product">
          <hr />
          {filteredProduct ? (
            <React.Fragment>
              <div className="listproduct-format-main listproduct-format">
                <img src={filteredProduct.image} alt="" className="listproduct-icon" />
                <p>Id: {filteredProduct.id}</p>
                <p>Name: {filteredProduct.name}</p>
                <p>Age: {filteredProduct.age}</p>
                <p>State: {filteredProduct.state}</p>
                <p>District: {filteredProduct.District}</p>

                <img
                  onClick={() => removeProduct(filteredProduct.id)}
                  src={delete1}
                  alt="Remove"
                  className="listproduct-remove"
                />
              </div>
              <hr />
            </React.Fragment>
          ) : searchQuery ? (
            <p>No product found with the given ID</p>
          ) : (
            allProducts.map((product, index) => (
              <React.Fragment key={index}>
                <div className="listproduct-format-main listproduct-format">
                  <img src={product.image} alt="" className="listproduct-icon" />
                  <p>Id: {product.id}</p>
                  <p>Name: {product.name}</p>
                  <p>Age: {product.age}</p>
                  <p>State: {product.state}</p>
                  <p>District: {product.District}</p>

                  <img
                    onClick={() => removeProduct(product.id)}
                    src={delete1}
                    alt="Remove"
                    className="listproduct-remove"
                  />
                </div>
                <hr />
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveProduct;
