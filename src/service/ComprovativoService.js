import api from "./api";

export const getComprovativos = async () => {
  try {
    return await api.get("comprovativos");
  } catch (error) {
    console.log(error.message);
  }
};

export const getComprovativosId = async (id) => {
  try {
    return await api.get(`comprovativos/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};


export const createComprovativos = async (data) => {
  try {
    return await api.post("comprovativos", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createComprovativo = async (data) => {
  try {
    return await api.post("comprovativos/save", data);
  } catch (error) {
    console.log(error.message);
  }
}