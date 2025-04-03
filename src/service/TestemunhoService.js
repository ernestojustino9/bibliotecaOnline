import api from "./api";

export const getTestemunhos = async () => {
  try {
    return await api.get("/testemunhos");
  } catch (error) {
    console.log(error.message);
  }
};
export const createTestemunho = async (data) => {
  try {
    // return await api.post("http://localhost:4000/api/Testemunho/cadastrar", data);
    return await api.post("http://localhost:4000/api/Testemunho/cadastrar", data);
  } catch (error) {
    console.log(error.message);
  }
};



