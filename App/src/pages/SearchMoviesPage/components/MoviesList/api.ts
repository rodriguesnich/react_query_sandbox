import { Film } from "./models";

export const fetchTodoList = async (): Promise<Film[]> => {
  const response = await fetch(
    "http://localhost:3001/films"
  ).then((res) => res.json());
  //throw new Error("Test");
  
  return response || [];
};
