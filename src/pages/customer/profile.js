import {Nav,NavDropdown} from "react-bootstrap";
import logo from "../../components/img/WaysBucks (1) 1.png";
import {Link} from "react-router-dom";
import keranjang from "../../components/img/shopping-basket.png";
import iprofile from "../../components/img/user 2.png";
import iLogout from "../../components/img/logout 1.png";
import profile from "../../components/img/profile.png";
import gmbr from "../../components/img/Product 1.png";
import barcode from "../../components/img/barcode.png";
import { UserContext } from '../../context/userContext';

const Profile = () => {
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
                    <div className="row col-6 exprofile d-flex">
                        <div className="profile1 col-6 mt-4 ml-5" style={{marginLeft:"100px"}}>
                            <h2 className="card-title mb-4"><strong>My Profile</strong></h2>
                            <img className="card-img-top" height="80%" src={profile} alt="profile"/>
                        </div>
                        <div className="profile2 col-3 mt-5" >
                            <p className="card-title coklat">Full Name</p>
                            <p className="card-text">Adi Surya Basri</p>
                            <p className="card-title coklat">Email</p>
                            <p className="card-text">sadi34844@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-6 profile3 mt-4">
                        <h2 className="card-title mb-4" style={{color:"#562424"}}><strong>My Transaction</strong></h2>
                        <div className="card p-3" style={{maxWidth:" 540px",backgroundColor:"#efa9b0"}}>
                            <div className="row g-0">
                                <div className="row col-10">
                                    <div className="row col-12">
                                        <div className="col-md-4 ">
                                            <img className="imgtrans p-3 img-fluid rounded-start" src={gmbr} alt="..."/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <h5 className="card-title">Ice Coffe Palm Sugar</h5>
                                            <p className="card-title mb-2"><strong>Saturday</strong>, 14 Juli 2021</p>
                                            <p className="card-text coklat"><small>Toping : Bill</small></p>
                                            <p className="card-text coklat"><small className="text-muted">Price : Rp. 500.000</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-12">
                                        <div className="col-md-4 ">
                                            <img className="imgtrans p-3 img-fluid rounded-start" src={gmbr} alt="..."/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <h5 className="card-title">Ice Coffe Palm Sugar</h5>
                                            <p className="card-title mb-2"><strong>Saturday</strong>, 14 Juli 2021</p>
                                            <p className="card-text coklat"><small>Toping : Bill</small></p>
                                            <p className="card-text coklat"><small className="text-muted">Price : Rp. 500.000</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 align-items-center">
                                    <img  src={logo} className="img-fluid rounded-star mt-2" alt="..."/>
                                    <img  src={barcode} className="img-fluid rounded-star mt-3" alt="..."/>
                                    <h5 className="status mt-3">On The Wayt</h5>
                                    <p className="coklat mt-2" style={{fontSize:"x-small"}}><strong>Sub Total: 69.000</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Profile;