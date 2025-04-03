import api from "./api";

const getInscricoesOnlines = () => {
  return api.get("online");
};

const getInscricaoOnlineId = (id) => {
  return api.get(`online/${id}`);
};

const postInscricaoOnline = (data) => {
  return api.post("online", data);
};

export default {
  getInscricoesOnlines,
  getInscricaoOnlineId,
  postInscricaoOnline,
};
