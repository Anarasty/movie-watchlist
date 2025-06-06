import react from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Watchlist from "./Components/Watchlist";
import Watched from "./Components/Watched";
import Add from "./Components/Add";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
