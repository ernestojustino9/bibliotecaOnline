import api from "./api";

export const getNossaEquipes = async () => {
  try {
    return await api.get("nossaEquipes");
  } catch (error) {
    console.log(error.message);
  }
};



