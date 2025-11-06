import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Details() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return (
      <div className="flex justify-center items-center w-screen">
        <p className="text-gray-600 text-lg">Product details not available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden max-w-6xl w-full">

        {/* ✅ Left Side - Product Image */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full max-w-md h-[450px]"
            loading="lazy"
          />
        </div>

        {/* ✅ Right Side - Product Details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center mb-4">
            <Rating
              name="rating"
              value={product.rating?.rate || 0}
              precision={0.5}
              readOnly
            />
            <p className="text-gray-500 text-sm ml-2">
              ({product.rating?.count || 0} reviews)
            </p>
          </div>

          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${product.price}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ShoppingCartIcon />}
              className="!rounded-full !px-6"
            >
              Add to Cart
            </Button>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ArrowBackIcon />}
                className="!rounded-full !px-6"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
