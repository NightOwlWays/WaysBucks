import {Nav, Button, Table} from "react-bootstrap";
import logo from "../../components/img/frame.png";
import {Link} from "react-router-dom";
import {listcategory} from "../datadummy";

const category = () => {
    return (
        <>
            <Nav className="navbar m-2 justify-content-center align-items-center m-0 p-0">
                <div className="container m-0 p-0">
                    <img src={logo} alt="logo" className="logoi" />
                    <div className="align-items-end">
                        <Link className="navbar-brand" to="/complainadmin">Complain</Link>
                        <Link className="navbar-brand card-title" to="/category">Category</Link>
                        <Link className="navbar-brand" to="/product">Product</Link>
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
                            <th scope="col">Category Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listcategory.map((item) =>
                    <tr>
                        <th scope="row">{item.no}</th>
                        <td>{item.name}</td>
                        <td>
                            <Button type="button mx-3" className="btn btn-success col-2 position-relative"><Link to="/editproduct">Edit</Link></Button>
                            <Button type="button mx-3" className="btn btn-danger col-2 position-relative">Delete</Button>
                        </td>
                    </tr>                        
                    )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default category;