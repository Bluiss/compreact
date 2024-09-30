// src/services/api.js
import axios from "axios";

const API_URL = "https://compapi-3eaefc774f19.herokuapp.com/api/"; // Use the correct API URL

// Fetch data from the API
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}your-endpoint/`); // Replace 'your-endpoint/' with your actual endpoint
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Throw the error for further handling
  }
};
