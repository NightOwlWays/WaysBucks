import {Nav, Table,NavDropdown,Button} from "react-bootstrap";
import logo from "../../components/img/WaysBucks (1) 1.png";
import {Link,useNavigate} from "react-router-dom";
import itopping from "../../components/img/itopping.png";
import iproduct from "../../components/img/iproduct.png";
import {listtransaction} from "../../fakedata/datadummy";
import iLogout from "../../components/img/logout 1.png";
import React, {useState,useContext} from 'react';
import { UserContext } from '../../context/userContext';
import Modaltransaction from "../../components/modaltransaction";

const Transaction = () => {
    const [modalShow, setModalShow] = useState(false);
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
                            <NavDropdown.Item href="#action5" onClick={logout}><img src={iLogout}  alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </Nav>
            <div className="side1 container-fluid justify-content-center align-items-center mt-4 p-5">
            <h2 className="mb-5 mx-5">Income Transaction</h2>

                <Table bordered hover className="mx-5" style={{maxWidth:"1300px"}} >
                    <thead>
                        <tr className="table-active border-secondary">
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Post Code</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listtransaction.map((item, index) =>
                    <tr onClick={() => {setModalShow(true)}} key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.postcode}</td>
                        <td><a href="#" style={{color:"blue"}}>{item.income}</a></td>
                        <td style={{color:item.color}}>{item.status}</td>
                    </tr>                        
                    )}
                    </tbody>
                </Table>
                <Modaltransaction show={modalShow}onHide={() => setModalShow(false)}/>
            </div>
        </>
    );
};

export default Transaction;