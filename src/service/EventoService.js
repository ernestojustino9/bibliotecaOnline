import api from "./api";

export const getEventoInternos = async () => {
  try {
    return await api.get("eventoInternos");
  } catch (error) {
    console.log(error.message);
  }
};


export const getEventoInternoId = async (id) => {
  try {
    return await api.get(`eventoInternos/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
// Externos
export const getEventoExternos = async () => {
  try {
    return await api.get("eventoExternos");
  } catch (error) {
    console.log(error.message);
  }
};

export const getEventoExternoId = async (id) => {
  try {
    return await api.get(`eventoExternos/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};



