import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";

console.log(<Home />);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={"All Logs"} />
        <Route path="/logs/new" element={"Create New Log Form"} />
      </Routes>
    </div>
  );
}

export default App;
