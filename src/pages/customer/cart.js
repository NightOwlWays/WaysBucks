import {Nav,NavDropdown,Button} from "react-bootstrap";
import logo from "../../components/img/WaysBucks (1) 1.png";
import sampah from "../../components/img/sampah.png";
import {Link} from "react-router-dom";
import keranjang from "../../components/img/shopping-basket.png";
import iprofile from "../../components/img/user 2.png";
import iLogout from "../../components/img/logout 1.png";
import gmbr from "../../components/img/Product 1.png";
import Notif from "../../components/notif";
import {useState} from 'react';

const Cart = () => {
    const [notifShow, setNotifShow] = useState(false);

    return (
        <>
            <Nav className="navbar m-2 justify-content-center m-0 p-0">
                <div className="container m-0 p-0">
                    <Link to="/">
                    <img src={logo} alt="logo" class="logoi" />
                    </Link>                    
                    <div class="d-flex justify-content-end col-6">
                        <img src={keranjang} alt="logo" style={{maxWidth:"35px",marginRight:"40px"}} />
                        <NavDropdown className="ronded-circle" id={`offcanvasNavbarDropdown-expand-lg`}>
                        <Link to="/profile"> 
                            <NavDropdown.Item href="#action4"><img src={iprofile} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/> Profile</NavDropdown.Item>
                        </Link>
                                <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5"><img src={iLogout} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </Nav>
        
                <div className="row container-homecard d-flex p-1 m-1 ">
                    <div className="profile1 mt-4 ml-5" style={{marginLeft:"200px",width:"100%"}}>
                        <h2 className="card-title mb-4"><strong>My Chart</strong></h2>
                        <h5 className="card-title">Review Your Order</h5>
                    </div> 
                    <div className="col-6 exprofile mr-5 " style={{marginLeft:"200px"}}>
                        <hr/>
                        <div className="row g-0">
                            <div className="row col-12">
                                <div className="row col-12">
                                    <div className="col-md-2 ">
                                        <img className="imgtrans p-3 img-fluid rounded-start" src={gmbr} width="100px" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card mt-2 border-0">
                                        <h5 className="card-title">Ice Coffe Palm Sugar</h5>
                                        <p className="card-title"><strong>Toping</strong>: Bill Berry</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card mt-2 border-0">
                                        <p className="card-title">Rp.33.000</p>
                                        <img src={sampah} alt="logo" style={{width:"15px"}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row col-12">
                                    <div className="col-md-2 ">
                                        <img className="imgtrans p-3 img-fluid rounded-start" src={gmbr} width="100px" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card mt-2 border-0">
                                        <h5 className="card-title">Ice Coffe Palm Sugar</h5>
                                        <p className="card-title"><strong>Toping</strong>: Bill Berry</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="card mt-2 border-0">
                                        <p className="card-title">Rp.33.000</p>
                                        <img src={sampah} alt="logo" style={{width:"15px"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="col-4 profile3 ml-5">
                        <hr/>
                        <div className="row">
                            <p className="col-10">Subtotal</p>
                            <p className="col-2">69000</p>
                        </div>
                        <div className="row">
                            <p className="col-10">Qty</p>
                            <p className="col-2">2</p>
                        </div>
                        <hr/>
                        <div className="row">
                            <p className="col-10 card-title"><strong>Total</strong></p>
                            <p className="col-2 card-title"><strong>69000</strong></p>
                        </div>
                        <div className="row">
                        <Button type="submit" onClick={() => setNotifShow(true)} className="btn-danger col-12 mt-5 btn-primary">Pay</Button>
                        </div>
                    </div>
                </div>
            <Notif show={notifShow} onHide={() => setNotifShow(false)} />
        </>
    );
};

export default Cart;