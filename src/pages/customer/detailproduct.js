import {Button, Nav} from "react-bootstrap";
import logo from "../../components/img/frame.png";
import {Link} from "react-router-dom";

const detailproduct = () => {
    return (
        <>
            <Nav className="navbar m-2 justify-content-center align-items-center m-0 p-0">
                <div className="container m-0 p-0">
                    <img src={logo} alt="logo" className="logoi" />
                    <div className="align-items-end">
                        <Link className="navbar-brand" to="/complaincs">Complain</Link>
                        <Link className="navbar-brand" to="/profile">Profile</Link>
                        <Link className="navbar-brand" to="/">Logout</Link>
                    </div>
                </div>
            </Nav>
            <div className="side1 container-fluid d-flex justify-content-center align-items-center">
                <div className="container-homecard d-flex p-5 m-5 ">
                    <div className="leftp">
                        <img className="card-img-top" height="80%" src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" alt="dumbmerch"/>
                    </div>
                    <div className="rightp">
                        <h2 className="card-title">Mouse</h2>
                        <p className="card-text">Stock:600</p>
                        <ul>
                            <li>Wireless Mouse</li>
                            <li>Konektivitas wireless 2.4 Ghz</li>
                            <li>Jarak wireless hingga 10 meter</li>
                            <li>Plug and Play</li>
                            <li>Baterai tahan hingga 12 bulan</li>
                        </ul>
                        <p className="card-text mb-3">Mouse Wireless Alytech AL - YSD, Hadir dengan desain 3 tombol mouser yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini di dukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi windows 7,8,10 keatas, Mac OS X 10.8 atau yang lebih baru dari sistem operasi Chrome OS</p>
                        <h5 className="card-title mb-3 text-end">Rp. 300.900</h5>
                        <Button type="submit" className="btn-danger col-12 btn-primary ">Buy</Button>
                    </div>
                </div>
            </div>
            </>
    );
};

export default detailproduct;