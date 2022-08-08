import { Modal, Button, Form } from 'react-bootstrap';
import {Link,useNavigate} from "react-router-dom";
import { useState, useContext,useEffect } from 'react'
import { UserContext } from '../context/userContext'
import Register from "../components/register";
import { account } from "../fakedata/datadummy";

export default function Login(props) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
      const switchRegister = () => {
        setLoginShow(false);
        setRegisterShow(true);
      }
      const [login, setLogin] = useState({});

      const handleChange = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value,
        });
      };
    
      const navigate = useNavigate();
      const [state, dispatch] = useContext(UserContext);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        let status;
        if (email === "admin@mail.com") {
          status = "admin";
          navigate("/transaction");
        } else {
          status = "customer";
          navigate("/");
        }
    
        const data = {
          email,
          password,
          status,
        };
    
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data,
        });
        props.onHide(true);
      };
    
return (
  <>
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ backgroundColor: "white",padding: "20px",borderRadius: "5px"}}>
      <Modal.Header className="border-0">
        <Modal.Title id="contained-modal-title-vcenter">
          <strong>Login</strong>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlID="formBasicEmail">
            <Form.Control type="email" className="email" id="email" name="loginEmail" aria-describedby="emailHelp" placeholder="Email" onChange={handleChange}  />
          </Form.Group>
          <Form.Group className="mb-3" controlID="formBasicPassword">
            <Form.Control type="password" className="password" id="password" name="loginPassword" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Button type="submit" className="btn-danger col-12 btn-primary">Login</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center border-0">
        <p className="text-dark">Don't have an account ? Klik <a style={{color:'black'}} href='#' onClick={switchRegister} ><strong>Here</strong></a></p>
      </Modal.Footer>
      </div>
      <Register show={registerShow} onHide={() => setRegisterShow(false)} />
      <Login show={loginShow} onHide={() => setLoginShow(false)} />
    </Modal>
  </>
  );
}