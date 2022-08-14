import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
// import { Homepage } from "./pages/Homepage";
// import { Travel } from "./pages/Travel";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage /> */}
      {/* <Travel /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;
