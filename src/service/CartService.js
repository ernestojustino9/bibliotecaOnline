import api from "./api";

export const getCarts = async () => {
  try {
    return await api.get("carrinhos");
  } catch (error) {
    console.log(error.message);
  }
};

// LISTA PRODUTO
export const getCartsUser = async (user) => {
  try {
    return await api.get("carrinhoGlobals/user/"+user);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCartsUserReport = async (user) => {
  try {
    return await api.get("carrinhoGlobals/userReport/"+user);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCartsUserAumentarQtd = async (id) => {
  try {
    return await api.get("carrinhos/aumentar/"+id);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCartsUserDiminuirQtd = async (id) => {
  try {
    return await api.get("carrinhos/diminuir/"+id);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCartId = async (id) => {
  try {
    return await api.get(`cart/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCartId = async (user, item) => {
    try {
      return await api.delete(`carrinhoGlobals/deleteItems/${user}/${item}`);
    } catch (error) {
      console.log(error.message);
    }
  };