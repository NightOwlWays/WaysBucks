import "bootstrap/dist/css/bootstrap.min.css"
import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage,Profile,Detailproduct,Cart,Transaction,Addtoping,Addproduct} from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailproduct/:id" element={<Detailproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/addtoping" element={<Addtoping />} />
        <Route path="/addproduct" element={<Addproduct />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
