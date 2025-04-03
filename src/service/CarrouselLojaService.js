import api from "./api";

export const getCarrouses = async () => {
  try {
    return await api.get("carrouselLojas");
  } catch (error) {
    console.log(error.message);
  }
};




