import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const getLongestSubstring = async (body) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/dsa/longestSubstring`,
      body
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Error fetching data from the API."
    );
  }
};
