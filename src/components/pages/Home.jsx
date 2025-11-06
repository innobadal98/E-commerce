import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Searchbar from "../search/Searchbar";
import { Box, Tabs, Tab } from "@mui/material";
import Productcard from "../cards/Productcard";

function Home() {
  const [products, setProducts] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryName, setCategoryName] = useState("all");
  const [allcategores, setAllCategores] = useState([]);

  // Fetch API data
  async function fechData() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilterData(response.data);
      const uniqueCatgery = [
        "all",
        ...new Set(response.data.map((p) => p.category)),
      ];
      setAllCategores(uniqueCatgery);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fechData();
  }, []);

  // Filtering logic
  useEffect(() => {
    let filtered = [...products];

    if (categoryName !== "all") {
      filtered = filtered.filter((p) => p.category === categoryName);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterData(filtered);
  }, [products, search, categoryName]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={60} />
      </div>
    );
  }

  return (
    <div className="w-screen">
      <Searchbar setSearchValue={setSearch} />

      {/* Category Tabs */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Tabs
          value={categoryName}
          onChange={(e, newValue) => setCategoryName(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {allcategores.map((cat) => (
            <Tab
              key={cat}
              value={cat}
              label={cat
                .split(" ")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            />
          ))}
        </Tabs>
      </Box>

      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "black", textAlign: "center", fontWeight: 600, mb: 4 }}
      >
        Our Products
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {filterdata.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h6" color="text.secondary">
              🔍 No products found matching "{search}".
            </Typography>
          </Box>
        ) : (
          filterdata.map((p) => (
            <Grid item key={p.id}>
              <Productcard product={p} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default Home;
