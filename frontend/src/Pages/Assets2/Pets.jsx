import React, { useContext } from "react";
import { PetContext } from "../../PetContext/PetContextProvider";
import { useParams } from "react-router-dom";
import InnerDisplay from "../../Components/InnerDisplay/InnerDisplay";

const Pets = () => {
  const { all_product } = useContext(PetContext); // Changed to all_product
  const { productID } = useParams();

  // Log all_product and productID for debugging
  console.log("All products data:", all_product);
  console.log("Product ID from params:", productID);

  // Ensure productID is a number and find the corresponding product
  const product = all_product?.find((e) => e.id === Number(productID)); // Changed to all_product

  // Log the selected product for debugging
  console.log("Selected product:", product);

  // Check if data is still loading or product not found
  if (!all_product) {
    return <p>Loading data...</p>;  // Data is still being fetched
  }

  if (!product) {
    return <p>Product not found or invalid product ID...</p>;  // Product ID does not match any product
  }

  return (
    <>
      <InnerDisplay product={product} />
    </>
  );
};

export default Pets;


// import React, { useContext } from "react";
// import { PetContext } from "../../PetContext/PetContextProvider";
// import { useParams } from "react-router-dom";
// import InnerDisplay from "../../Components/InnerDisplay/InnerDisplay";
// import "./Pets.css";

// const Pets = () => {
//   const { all_product } = useContext(PetContext); // Changed to all_product
//   const { productID } = useParams();

//   const product = all_product?.find((e) => e.id === Number(productID));

//   if (!all_product) {
//     return <p className="loading">Loading data...</p>;
//   }

//   if (!product) {
//     return <p className="error-message">Product not found or invalid product ID...</p>;
//   }

//   return (
//     <div className="pets-container">
//       <div className="pets-card">
//         <img src={product.image} alt={product.name} className="pets-image" />
//         <div className="pets-info">
//           <h2>{product.name}</h2>
//           <p><strong>Age:</strong> {product.age}</p>
//           <p><strong>Category:</strong> {product.category}</p>
//           <p><strong>Address:</strong> {product.address}</p>
//           <p><strong>State:</strong> {product.state}</p>
//           <p><strong>Phone Number:</strong> {product.PhoneNumber}</p>
//           <p><strong>Email:</strong> {product.Email}</p>
//           <p><strong>District:</strong> {product.District}</p>
//         </div>
//       </div>
//       <InnerDisplay product={product} />
//     </div>
//   );
// };

// export default Pets;
