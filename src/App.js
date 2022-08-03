import "bootstrap/dist/css/bootstrap.min.css"
import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage,Profile,Detailproduct,Complaincs,Category,Complainadmin,Product,Editproduct} from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailproduct" element={<Detailproduct />} />
        <Route path="/complaincs" element={<Complaincs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/complainadmin" element={<Complainadmin />} />
        <Route path="/product" element={<Product />} />
        <Route path="/editproduct" element={<Editproduct />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
