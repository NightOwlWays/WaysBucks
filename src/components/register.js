import { Modal, Button, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Login from "../components/login";
import { useState } from 'react'

export default function Register(props) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
      const switchLogin = () => {
        setLoginShow(true);
        setRegisterShow(false);
      }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ backgroundColor: "white",padding: "20px",borderRadius: "5px"}}>
      <Modal.Header className="border-0">
        <Modal.Title id="contained-modal-title-vcenter" >
          <strong>Register</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlID="formBasicEmail">
            <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlID="formBasicPassword">
            <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlID="formBasicName">
            <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Full Name"/>
          </Form.Group>
          <Link to="/homepage">
          <Button type="submit" className="btn-danger col-12 btn-primary ">Register</Button>
          </Link>
        </Form>
        </Modal.Body>
      <Modal.Footer className="justify-content-center border-0">
        <p className="text-dark">Already have an account ? Klik <a style={{color:'black'}} href='#' onClick={switchLogin}><strong>Here</strong></a></p>
      </Modal.Footer>
      </div>
      <Login show={loginShow} onHide={() => setLoginShow(false)} />
      <Register show={registerShow} onHide={() => setRegisterShow(false)} />
    </Modal>
  );
}