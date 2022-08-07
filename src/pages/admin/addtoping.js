import {Nav,NavDropdown,Form,Button} from "react-bootstrap";
import logo from "../../components/img/WaysBucks (1) 1.png";
import {Link,useNavigate} from "react-router-dom";
import itopping from "../../components/img/itopping.png";
import iproduct from "../../components/img/iproduct.png";
import iLogout from "../../components/img/logout 1.png";
import gmbr from "../../components/img/Product 1.png";
import React, {useState,useContext} from 'react';
import { UserContext } from '../../context/userContext';

const Addtoping = () => {
    const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        dispatch({
          type: 'LOGOUT'
        })
        navigate("/");
      }
    return (
        <>
            <Nav className="navbar m-2 justify-content-center m-0 p-0">
                <div className="container m-0 p-0">
                    <Link to="/transaction">
                    <img src={logo} alt="logo" class="logoi" />
                    </Link>                    
                    <div class="d-flex justify-content-end col-6">
                        <NavDropdown className="ronded-circle" id={`offcanvasNavbarDropdown-expand-lg`}>
                        <Link to="/addproduct"> 
                            <NavDropdown.Item href="#action4"><img src={iproduct} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/> Add Product</NavDropdown.Item>
                        </Link>
                        <Link to="/addtoping"> 
                            <NavDropdown.Item href="#action4"><img src={itopping} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/> Add Topping</NavDropdown.Item>
                        </Link>
                                <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}><img src={iLogout} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </Nav>
            <div className="side1 container-fluid justify-content-center align-items-center mt-4 p-5">
            <div className="row">
                <div className="col-6">
                <h2 className="mb-5 mx-5">Toping</h2>
                    <Form className="mx-5">
                        <div className="mb-4">
                            <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#f9d9d9", color: "white"}} placeholder="Name Toping"/>
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#f9d9d9", color: "white"}} placeholder="Price"/>
                        </div>
                        <div className="mb-5">
                            <input className="form-control" style={{backgroundColor: "#f9d9d9", color: "white"}} type="file" id="formFile"/>
                        </div>
                        <div className="mt-3 row justify-content-center">
                        <Button type="submit" className="btn-success col-11 btn-danger mx-auto ">Add Toping</Button>
                        </div>
                    </Form>
                </div>
                <div className="col-6 mt-4 ">
                    <img className="px-5" src={gmbr} style={{width:"100%"}}/>
                </div>
            </div>
            </div>
        </>
    );
};

export default Addtoping;