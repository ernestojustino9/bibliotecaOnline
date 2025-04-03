import api from "./api";

export const getComentarioBlogs = async () => {
  try {
    return await api.get("comentarioBlogs");
  } catch (error) {
    console.log(error.message);
  }
};

// LISTA PRODUTO
// export const getComentarioBlogUser = async (user) => {
//   try {
//     return await api.get("comentarioBlogs/user/"+user);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const postComentarioBlogs = async (data) => {
  try {
    return await api.post("comentarioBlogs", data);
  } catch (error) {
    console.log(error.message);
  }
};
