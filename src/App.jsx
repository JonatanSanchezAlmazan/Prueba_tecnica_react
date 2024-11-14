import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ContentPage from "./Pages/ContentPage/ContentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<ContentPage contentType="series" />} />
        <Route path="/movies" element={<ContentPage contentType="movie" />} />
      </Routes>
    </>
  );
}

export default App;
