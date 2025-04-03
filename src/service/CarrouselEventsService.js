import api from "./api";

export const getCarrousesEventes = async () => {
  try {
    return await api.get("carrouselEvents");
  } catch (error) {
    console.log(error.message);
  }
};



