import React, {useState } from 'react';
import {Nav,Button} from "react-bootstrap";
import logo from "../components/img/WaysBucks (1) 1.png";
import {Link} from "react-router-dom";
import gambarbawah from  "../components/img/Jumbotron.png";
import gambaratas from  "../components/img/Rectangle 3.png";
import Login from "../components/login";
import Register from "../components/register";



export default function Homepage() {

    const [modalShow, setModalShow] = useState(false);
    return (
        <>  
        
            <Nav className="navbar m-2 justify-content-center m-0 p-0">
                <div className="container m-0 p-0">
                    <Link to="/">
                    <img src={logo} alt="logo" class="logoi" />
                    </Link>                    
                    <div class="d-flex justify-content-end col-6">
                        <Button type="button mx-3" className="btn btn-outline-danger col-2 fw-bold" onClick={() => setModalShow(true)}>Login</Button>
                        
                        <Button type="button mx-3" className="btn btn-danger col-2 mx-3 fw-bold" onClick={() => setModalShow(true)}>Register</Button>
                    </div>
                </div>
            </Nav>
            <div className="row atas mx-5">
                <div className="col-6 mt-5 ms-5">
                    <h1 className="mt-3"><strong>WAYSBUCKS</strong></h1>
                    <br></br>
                    <h3>Things are changing,but we're still here for you</h3>
                    <br></br>
                    <p>We have temporarily closed our in-store cafes,but select grocery and drive-thru locations remaining open.<strong>Waysbucks</strong> Drivers is also available</p>
                    <br></br>
                    <p>Lets Order...</p>
                </div>
                <div className="col-5 mt-4">
                    <img src={gambaratas} className="gambaratas" alt="gambar"/>
                </div>
            </div>
            <div className="row gambarbawah mx-5">
                <div className="col-12">
                    <img src={gambarbawah} alt="gambar"/>
                </div>
                <div className="col-12 justify-content-center align-items-center mb-5">
                <h4 className="blog-title-post fw-bold my-4">Let's Order</h4>
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        <Link to="/detailproduct">
                        <div className="col">
                            <div className="card border-0 bg-dark">
                                <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mouse</h5>
                                    <p className="card-text">Rp.500.000</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to="/detailproduct">
                        <div className="col">
                            <div className="card border-0 bg-dark">
                                <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mouse</h5>
                                    <p className="card-text">Rp.500.000</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to="/detailproduct">
                        <div className="col">
                            <div className="card border-0 bg-dark">
                                <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mouse</h5>
                                    <p className="card-text">Rp.500.000</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to="/detailproduct">
                        <div className="col">
                            <div className="card border-0 bg-dark">
                                <img src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mouse</h5>
                                    <p className="card-text">Rp.500.000</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div> 
            <Login show={modalShow} onHide={() => setModalShow(false)} />
            <Register show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};
