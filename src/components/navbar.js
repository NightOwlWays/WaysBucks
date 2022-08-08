// import React, {useContext, useState } from 'react';
// import {Nav,Button, Navbar} from "react-bootstrap";
// import {Link, useNavigate} from "react-router-dom";
// import logo from "../img/WaysBucks (1) 1.png";
// import Login from "../components/login";
// import Register from "../components/register";
// import { UserContext } from '../context/userContext';

// export default function Navbaruser(props){
//     const [state, dispatch] = useContext(UserContext)

//     let navigate = useNavigate()

//     const logout = () => {
//         dispatch({
//             type:"LOGOUT"
//         })
//         navigate("/")
//     }

//     return{
//         <div>
//         <Nav className="navbar m-2 justify-content-center m-0 p-0">
//             <div className="container m-0 p-0">
//                 <Link to="/">
//                 <img src={logo} alt="logo" class="logoi" />
//                 </Link>    
                                
//                 <div class="d-flex justify-content-end col-6">
//                     <Button type="button mx-3" className="btn btn-outline-danger col-2 fw-bold" onClick={() => setLoginShow(true)}>Login</Button>
//                     <Button type="button mx-3" className="btn btn-danger col-2 mx-3 fw-bold" onClick={() => setRegisterShow(true)}>Register</Button>
//                 </div>
//             </div>
//         </Nav>
//         </div>
//     }
// }
