import api from "./api"; 


export const createInscricao = async (data) => {
  try {
    return await api.post("/inscricoes", data);
  } catch (error) {
    console.log(error.message);
  }
};


