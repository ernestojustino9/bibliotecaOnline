import api from "./api";

export const getServicos = async () => {
  try {
    return await api.get("/serviceSites");
  } catch (error) {
    console.log(error.message);
  }
};

export const getServicoId = async (id) => {
  try {
    return await api.get(`serviceSites/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};


