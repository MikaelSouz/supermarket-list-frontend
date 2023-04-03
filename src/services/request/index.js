import { api } from "../api";

export const getList = async () => {
  try {
    const result = await api.get("/list-items");
    return result.data;
  } catch (error) {
    alert("Erro ao buscar dados da API");
    return { error };
  }
};

export const createItem = async (item) => {
  try {
    const result = await api.post("/list-item", {
      ...item,
    });
    return result.data;
  } catch (error) {
    alert("Erro ao incluir item, tente novamente!");
    return { error };
  }
};
