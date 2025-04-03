import api from "./api";

export const getProjectoInternos = async () => {
  try {
    return await api.get("projectoInternos");
  } catch (error) {
    console.log(error.message);
  }
};

export const getProjectoInternoId = async (id) => {
  try {
    return await api.get(`projectoInternos/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
// Externos
export const getProjectoExternos = async () => {
  try {
    return await api.get("projectoExternos");
  } catch (error) {
    console.log(error.message);
  }
};

export const getProjectoExternoId = async (id) => {
  try {
    return await api.get(`projectoExternos/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};