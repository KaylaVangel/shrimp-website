import "bootstrap/dist/css/bootstrap.css";
import './styles/globals.css';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Store from "./pages/store";
import Care from "./pages/care";
import About from "./pages/about";
import Shrimp from "./pages/store/shrimp";
import Frags from "./pages/store/frags";
import Plants from "./pages/store/plants";
import Accessories from "./pages/store/accessories";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store type={"all"}/>} />
        <Route path="/store/all" element={<Store type={"all"} />} />
        <Route path="/store/shrimp" element={<Shrimp type={"shrimp"}/>} />
        <Route path="/store/frags" element={<Frags />} />
        <Route path="/store/plants" element={<Plants />} />
        <Route path="/store/accessories" element={<Accessories />} />
        <Route path="/care" element={<Care />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
