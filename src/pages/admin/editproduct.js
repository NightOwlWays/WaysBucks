import {Nav, Button, Form} from "react-bootstrap";
import logo from "../../components/img/frame.png";
import {Link} from "react-router-dom";

const editproduct = () => {
    return (
        <>
            <Nav className="navbar m-2 justify-content-center align-items-center m-0 p-0">
                <div className="container m-0 p-0">
                    <img src={logo} alt="logo" className="logoi" />
                    <div className="align-items-end">
                        <Link className="navbar-brand" to="/complainadmin">Complain</Link>
                        <Link className="navbar-brand" to="/category">Category</Link>
                        <Link className="navbar-brand card-title" to="/product">Product</Link>
                        <Link className="navbar-brand" to="/">Logout</Link>
                    </div>
                </div>
            </Nav>
            <div className="side1 container-fluid justify-content-center align-items-center m-2 p-5">
                <h4>List Product</h4>
                <Form>
                    <div className="mb-3">
                        <input className="form-control" style={{backgroundColor: "#323030", color: "white"}} type="file" id="formFile"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#323030", color: "white"}} placeholder="nama produk"/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: "#323030", color: "white"}} placeholder="deskripsi" rows="4"></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#323030", color: "white"}} placeholder="harga"/>
                    </div>
                    <div className="mb-5">
                        <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#323030", color: "white"}} placeholder="qty"/>
                    </div>
                    <Button type="submit" className="btn-success col-12 btn-primary ">Save</Button>
                </Form>
            </div>
        </>
    );
};

export default editproduct;