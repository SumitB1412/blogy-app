import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { NewBlog } from "./pages/NewBlog";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Homepage } from "./pages/Homepage";
import { SinglePages } from "./pages/SinglePages";
import { SingleBlog } from "./pages/SingleBlog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/travel" element={<SinglePages props={"Travel"} />} />
        <Route path="/food" element={<SinglePages props={"Food"} />} />
        <Route path="/tech" element={<SinglePages props={"Tech"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
