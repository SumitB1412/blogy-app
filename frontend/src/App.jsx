import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { NewBlog } from "./pages/NewBlog";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Homepage } from "./pages/Homepage";
import { Travel } from "./pages/Travel";
import { Food } from "./pages/Food";
import { Tech } from "./pages/Tech";
import { SingleBlog } from "./pages/SingleBlog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/food" element={<Food />} />
        <Route path="/tech" element={<Tech />} />
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
