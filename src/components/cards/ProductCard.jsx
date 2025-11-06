import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card
      className="flex flex-col justify-between items-center rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
      sx={{
        width: 300, //  same width for all cards
        height: 420, //  same height for all cards
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/*  Image box with fixed size */}
      <div className="flex items-center justify-center bg-gray-50 w-full h-48 p-3 border-b">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full max-w-[200px] max-h-[200px]"
          loading="lazy"
        />
      </div>

      {/*  Content area */}
      <CardContent className="flex-grow px-4 py-3 w-full">
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          className="font-semibold text-gray-800 text-center truncate"
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="text-sm text-gray-600 text-center line-clamp-2"
        >
          {product.description.slice(0, 60)}...
        </Typography>

        <div className="flex items-center justify-between mt-2">
          <Rating
            name="half-rating"
            defaultValue={product.rating.rate}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="h6" className="font-bold text-gray-900">
            ${product.price}
          </Typography>
        </div>
      </CardContent>

      
      <CardActions className="justify-center pb-3">
        <Link
          to={`/${product.id}`}
          state={{ product }}
          className="no-underline"
        >
          <Button
            variant="contained"
            color="primary"
            className="!rounded-full !px-5 !py-1 !text-sm"
          >
            More Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
