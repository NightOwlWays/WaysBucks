import React, {useState,useContext} from 'react';
import {Nav,Button,NavDropdown} from "react-bootstrap";
import logo from "../components/img/WaysBucks (1) 1.png";
import {Link} from "react-router-dom";
import gambarbawah from  "../components/img/Jumbotron.png";
import gambaratas from  "../components/img/Rectangle 3.png";
import Login from "../components/login";
import Register from "../components/register";
import {listproduct} from "../fakedata/datadummy";
import { UserContext } from '../context/userContext';
import keranjang from "../components/img/shopping-basket.png";
import iprofile from "../components/img/user 2.png";
import iLogout from "../components/img/logout 1.png";

export default function Homepage() {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const [state, dispatch] = useContext(UserContext)

    const logout = () => {
        dispatch({
          type: 'LOGOUT'
        })
      }

    return (
        <>  
            <Nav className="navbar m-2 justify-content-center m-0 p-0">
                <div className="container m-0 p-0">
                    <Link to="/">
                    <img src={logo} alt="logo" class="logoi" />
                    </Link>                    
                    <div class="d-flex justify-content-end col-6">
                    <>
                    { state.isLogin ?(
                        <>
                        <img src={keranjang} alt="logo" style={{maxWidth:"35px",marginRight:"40px"}} />
                        <NavDropdown className="ronded-circle" id={`offcanvasNavbarDropdown-expand-lg`}>
                        <Link to="/profile"> 
                            <NavDropdown.Item href="#action4"><img src={iprofile} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/> Profile</NavDropdown.Item>
                        </Link>
                                <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout} href="/"><img src={iLogout} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/>Logout</NavDropdown.Item>
                        </NavDropdown>
                        </>
                    ) : (
                        <>
                        <Button id="login" type="button mx-3" className="btn btn-outline-danger col-2 fw-bold" onClick={() => setLoginShow(true)}>Login</Button>
                        <Button type="button mx-3" className="btn btn-danger col-2 mx-3 fw-bold" onClick={() => setRegisterShow(true)}>Register</Button>
                        </>
                    )}
                    </>
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
                    { state.isLogin ?(
                        <>                        
                            {listproduct.map((item) =>
                            <Link to={('/detailproduct/'+item.no)}>
                            <div className="col">
                                <div className="card border-0 bg-dark">
                                    <img src={require('../components/img/'+item.file)} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Rp.{item.price}</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            )}
                        </>
                        ):(
                        <>   
                            {listproduct.map((item) =>                     
                            <Link to="/" onClick={() => setLoginShow(true)}>
                            <div className="col">
                                <div className="card border-0 bg-dark">
                                    <img src={require('../components/img/'+item.file)} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Rp.{item.price}</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            )}
                        </>
                    )}
                    
                    </div>
                </div>
            </div> 
            <Login show={loginShow} onHide={() => setLoginShow(false)} />
            <Register show={registerShow} onHide={() => setRegisterShow(false)} />
        </>
    );
};
