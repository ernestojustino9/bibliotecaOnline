import api from "./api";

export const getParceiros = async () => {
  try {
    return await api.get("/parceiros");
  } catch (error) {
    console.log(error.message);
  }
};
