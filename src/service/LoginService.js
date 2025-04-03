import api from "./api"; 

export const createSession = async (data) => {
  try {
    return await api.post("/login", data);
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

export const createRegsister = async (data) => {
  try {
    return await api.post("/usuarios", data);
  } catch (error) {
    console.log(error.message);
  }
};


