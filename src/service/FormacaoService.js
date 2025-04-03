import api from "./api";

export const getFormacaos = async () => {
  try {
    return await api.get("cursos");
  } catch (error) {
    console.log(error.message);
  }
};

export const getFormacaosId = async (id) => {
  try {
    return await api.get(`cursos/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const createFormacao = async (data) => {
  try {
    // return await api.post("http://localhost:4000/api/Formacao/cadastrar", data);
    return await api.post("http://localhost:4000/api/Formacao/cadastrar", data);
  } catch (error) {
    console.log(error.message);
  }
};



