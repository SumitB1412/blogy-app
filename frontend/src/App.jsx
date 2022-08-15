import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { NewBlog } from "./pages/NewBlog";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Homepage } from "./pages/Homepage";
import { Travel } from "./pages/Travel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" elem={<Homepage />} />
        <Route path="/travel" elem={<Travel />} />
        <Route path="/login" elem={<Login />} />
        <Route path="/register" elem={<Register />} />
        <Route path="/new-blog" elem={<NewBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
