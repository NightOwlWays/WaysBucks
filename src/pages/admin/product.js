import {Nav, Button, Table} from "react-bootstrap";
import logo from "../../components/img/frame.png";
import {Link} from "react-router-dom";
import {listproduct} from "../datadummy";

const product = () => {
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
            <div className="side1 container-fluid justify-content-center align-items-center mt-5 p-5">
            <h4>List Category</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Desc</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listproduct.map((item, index) =>
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.desc}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>
                            <button type="button mx-3" class="btn btn-success col-3 position-relative"><Link to="/editproduct">Edit</Link></button>
                            <button type="button mx-3" class="btn btn-danger col-3 position-relative">Delete</button>
                        </td>
                    </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default product;