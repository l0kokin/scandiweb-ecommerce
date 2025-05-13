import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/:category?" element={<Home />} />
    </Routes>
  );
}

export default App;
