import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListSiswaPage from "./pages/ListSiswaPage";
import EditSiswaPage from "./pages/EditSiswaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListSiswaPage />} />
        <Route path="/edit/:id" element={<EditSiswaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
