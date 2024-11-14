import "./App.css";
import { Route, Routes } from "react-router-dom";
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
