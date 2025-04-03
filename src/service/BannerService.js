import api from "./api";

export const getBanners = async () => {
  try {
    return await api.get("/banners");
  } catch (error) {
    console.log(error.message);
  }
};

// export const getBannersHome = async (id) => {
//   try {
//     return await api.get(`/banners?tipo=${id}` );
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const getBannersHome = async () => {
  try {
    return await api.get("/banners?tipo=home" );
  } catch (error) {
    console.log(error.message);
  }
};
export const createBanner = async (data) => {
  try {
    // return await api.post("http://localhost:4000/api/Banner/cadastrar", data);
    return await api.post("http://localhost:4000/api/banners/cadastrar", data);
  } catch (error) {
    console.log(error.message);
  }
};



