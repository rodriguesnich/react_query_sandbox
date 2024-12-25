import axios, { AxiosError } from "axios";
import { Film } from "./models";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export async function fetchTodoList() {
  try {
    const { data } = await axios.get<Array<Film>>(`${VITE_SERVER_URL}/films`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`${error.message}`);
    }
    throw error;
  }
}
