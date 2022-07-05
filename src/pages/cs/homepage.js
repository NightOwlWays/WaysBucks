import {Nav} from "react-bootstrap";
import logo from "../../components/img/frame.png";
import {Link} from "react-router-dom";

const homepage = () => {
    return (
        <>
            <Nav className="navbar m-2 justify-content-center align-items-center m-0 p-0">
                <div className="container m-0 p-0">
                    <Link to="/category">
                    <img src={logo} alt="logo" class="logoi" />
                    </Link>
                    <div class="align-items-end">
                        <Link className="navbar-brand" to="/complaincs">Complain</Link>
                        <Link className="navbar-brand" to="/profile">Profile</Link>
                        <Link className="navbar-brand" to="/">Logout</Link>
                    </div>
                </div>
            </Nav>
            <div className="container-fluid justify-content-center align-items-center  p-5">
                <h4 className="blog-title-post fw-bold my-4">Product</h4>
                <div className="row row-cols-1 row-cols-md-5 g-3">
                    <Link to="/detailproduct">
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mouse</h5>
                                <p className="card-text">Rp.500.000</p>
                                <p className="card-text">Stock:600</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mouse</h5>
                                <p className="card-text">Rp.500.000</p>
                                <p className="card-text">Stock:600</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mouse</h5>
                                <p className="card-text">Rp.500.000</p>
                                <p className="card-text">Stock:600</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mouse</h5>
                                <p className="card-text">Rp.500.000</p>
                                <p className="card-text">Stock:600</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mouse</h5>
                                <p className="card-text">Rp.500.000</p>
                                <p className="card-text">Stock:600</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
};

export default homepage;