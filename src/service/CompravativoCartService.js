import api from "./api";

export const getComprovativoCarts = async () => {
  try {
    return await api.get("comprovativoCarts");
  } catch (error) {
    console.log(error.message);
  }
};

export const getComprovativoCartsId = async (id) => {
  try {
    return await api.get(`comprovativoCarts/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const getComprovativosCartId = async (id) => {
  try {
    return await api.get(`comprovativoCarts/cartCom/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const createComprovativoCarts = async (data) => {
  try {
    return await api.post("comprovativoCarts/save", data);
  } catch (error) {
    console.log(error.message);
  }
};

// LISTA COMPROVATIVA PRODUTO
export const getCompCartsUser = async (user) => {
  try {
    return await api.get("comprovativoCarts/user/" + user);
  } catch (error) {
    console.log(error.message);
  }
};


export const getFacturaUser = async (user) => {
  try {
    return await api.get("comprovativoCarts/user/"+user);
  } catch (error) {
    console.log(error.message);
  }
};