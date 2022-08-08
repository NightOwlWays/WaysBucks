import {Nav,NavDropdown,Form,Button} from "react-bootstrap";
import logo from "../../components/img/WaysBucks (1) 1.png";
import {Link,useParams,useNavigate} from "react-router-dom";
import keranjang from "../../components/img/shopping-basket.png";
import iprofile from "../../components/img/user 2.png";
import iLogout from "../../components/img/logout 1.png";
import {listtoping,listproduct} from "../../fakedata/datadummy";
import React, {useState,useContext} from 'react';
import { UserContext } from '../../context/userContext';

const Detailproduct = () => {

    const params = useParams()
    const index = params.id
    const [harga, setHarga] = useState(listproduct[index-1].price);
    const [state, dispatch] = useContext(UserContext)
    const navigate = useNavigate();
    
    function Add() {
        return setHarga(harga+3000);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const totalharga = document.getElementById("totalharga").value;
        const data = {
            totalharga
        }
        console.log(totalharga)
    }

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
                    <Link to="/">
                    <img src={logo} alt="logo" class="logoi" />
                    </Link>                    
                    <div class="d-flex justify-content-end col-6">
                    <Link to="/cart">
                        <img src={keranjang} alt="logo" style={{maxWidth:"35px"}}/>
                    </Link>
                    <div className="ronded-circle" style={{background:"red",marginRight:"40px",height: "25px",color: "white",borderRadius: "8px"}}>
                        <p></p> 
                    </div> 
                        <NavDropdown className="ronded-circle" id={`offcanvasNavbarDropdown-expand-lg`}>
                        <Link to="/profile"> 
                            <NavDropdown.Item href="#action4"><img src={iprofile} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/> Profile</NavDropdown.Item>
                        </Link>
                                <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5" onClick={logout}><img src={iLogout} alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </Nav>
            <div className="side1 container-fluid justify-content-center align-items-center mt-4 p-5">
            <div className="row">
                <div className="col-5 mt-4 ">
                    <img className="px-3" src={require('../../components/img/'+listproduct[index-1].file)} style={{width:"100%",maxHeight:"500px"}} alt="kopi"/>
                </div>
                <div className="col-7">
                    <h2 className="mb-2">{listproduct[index-1].name}</h2>
                    <p>Rp.{listproduct[index-1].price}</p>
                    <h5 className="coklat mb-3">Toping</h5>
                    <Form onSubmit={handleOnSubmit}>
                        <div className="row">
                            {listtoping.map((item) =>
                            <div className="col-3">
                                <input type="checkbox" class="btn-check" id={('btn-check-outlined'+item.name)} autocomplete="off" onClick={Add}></input>

                                <label class="btn btn-outline-primary" for={('btn-check-outlined'+item.name)} style={{padding:"3px"}}><img src={require('../../components/img/'+item.file)} style={{padding:"8px"}} alt="logo" class="logoi" /></label>

                                <p>{item.name}</p>
                            </div>
                            )}
                        </div>

                        <div className="row">
                            <h5 className="coklat col-10 mb-3">Total</h5>
                            <Form.Group className="col-2 mb-3" controlID="formBasicEmail">
                                <Form.Control type="number" style={{backgroundColor: "transparent",border: "none", fontWeight: "700"}} className="coklat totalharga" id="totalharga" name="totalharga" aria-describedby="totalharga" value={harga}/>
                            </Form.Group>
                        </div>

                        <div className="mt-3 row justify-content-center">
                            <Button type="submit" className="btn-success col-12 btn-danger mx-auto ">Add Cart</Button>
                        </div>
                    </Form>
                </div>
            </div>
            </div>
        </>
    );
};

export default Detailproduct;