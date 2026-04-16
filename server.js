// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// app.use(cors());

// const API_KEY = "AIzaSyDFztIiIyZ-buuuQHny7SNIU9GhVcIK2Is"; // Your API Key

// app.get("/api/nearby", async (req, res) => {
//   const { latitude, longitude, radius } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${
//     radius * 1000
//   }&type=photography&key=${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching Google Places API:", error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
