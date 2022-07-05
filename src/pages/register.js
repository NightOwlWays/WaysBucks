import {Form, Button} from "react-bootstrap";
import logo from '../components/img/frame.png';
import {Link} from "react-router-dom";

const register = () => {
    return (
        <div className="side1 container-fluid d-flex justify-content-center align-items-center">
        <div className="container-homecard d-flex p-5 m-5 ">
            <div className="left">
              <img className="logo m-3" src={logo} alt="dumbmerch"/>
              <h1>Easy, Fast and Reliable </h1>
              <p className="text-secondary col-8 mb-5">Go shopping for merchandise, just go to dumb merch shopping, the biggest merchandise in indonesia</p>
              <div className="row my-3">
                <button type="button mx-3" className="btn btn-danger col-2 position-relative"><Link to="/">Login</Link></button>
                <button type="button mx-3" className="btn btn col-2 position-relative mx-3 text-secondary fw-bold"><Link to="/register">Register</Link></button>
              </div>
            </div>
            <div className="right  mt-5">
              <div className="p-5  rounded-3" style={{backgroundColor:"#181818"}}>
                <Form>
                  <div className="mb-4">
                    <h2>Register</h2>
                  </div>
                  <Form.Group className="mb-3" controlID="formBasicName">
                    <Form.Control className="form-control" placeholder="Name" type="text" id="input-name" name="input-name"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlID="formBasicEmail">
                    <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlID="formBasicPassword">
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </Form.Group>
                  <Button type="submit" className="btn-danger col-12 btn-primary ">Register</Button>
                </Form>
              </div>
            </div>
        </div>
      </div>
    );
};

export default register;