import axios from "axios";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}:${import.meta.env.VITE_BACKEND_PORT}/api`, // Vite proxy target
    headers: {
      'x-api-key': import.meta.env.VITE_API_KEY,
      'Accept': 'application/json', // Explicitly ask for JSON
      'Content-Type': 'application/json'
    },
    withCredentials: true // If using cookies/auth
  });

const getRandomKitty = async () => {
  try {
    // Remove duplicate "/api" since baseURL already includes it
    const response = await apiClient.get("/kittys/search", {
        headers: {
            'Content-Type': 'application/json'
        }
    }); 
    //console.log("Env:", JSON.stringify(import.meta.env));
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching random kitty:", error.response?.data || error.message);
    return null;
  }
};

export default { getRandomKitty };
