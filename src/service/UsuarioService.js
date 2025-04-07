import api from "./api";


export const createUser = async (data) => {
  try {
    return await api.post("criarconta", data);
  } catch (error) {
    console.log(error.message);
  }
};
// 
export const createSession = async (data) => {
  try {
    return await api.post("entrar", data);
  } catch (error) {
    console.log(error.message);
  }
};
// 





