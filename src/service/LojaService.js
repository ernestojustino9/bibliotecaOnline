import api from "./api";

export const getProdutos = async () => {
  try {
    return await api.get("produtoSites");
  } catch (error) {
    console.log(error.message);
  }
};

export const getProdutosId = async (id) => {
  try {
    return await api.get(`produtoSites/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const CriarCarrinho = async (data) => {
  try {
    return await api.post(`carrinhos/criarcarrinho`, data);
  } catch (error) {
    console.log(error.message);
  }
};

