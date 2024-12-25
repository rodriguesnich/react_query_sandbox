import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SearchMoviesPage from "./pages/SearchMoviesPage";
import ServerSearchMoviesPage from "./pages/ServerSearchMoviesPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchMoviesPage />} />
        <Route path="/server" element={<ServerSearchMoviesPage />} />
      </Routes>
    </>
  );
}
