import api from "./api"; 

export const createSession = async (data) => {
  try {
    return await api.post("/entrar", data);
  } catch (error) {
    console.log(error.message);
  }
};

// export const endPointLogin = async (data) => {
//   try {
//     return await api.post("auth/login", data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createUser = async (data) => {
  try {
    return await api.post("/criarconta", data);
  } catch (error) {
    console.log(error.message);
  }
};


