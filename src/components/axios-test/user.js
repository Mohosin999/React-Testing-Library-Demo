import axios from "axios";

export const getUserData = async (userId) => {
  const response = await axios.get(`https://myapi/users/${userId}`);
  return response.data;
};
