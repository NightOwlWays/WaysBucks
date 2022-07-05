import {Nav} from "react-bootstrap";
import logo from "../../components/img/frame.png";
import {Link} from "react-router-dom";

const profile = () => {
    return (
        <>
            <Nav className="navbar m-2 justify-content-center align-items-center m-0 p-0">
                <div className="container m-0 p-0">
                    <img src={logo} alt="logo" className="logoi" />
                    <div className="align-items-end">
                        <Link className="navbar-brand" to="/complaincs">Complain</Link>
                        <Link className="navbar-brand card-title" to="/profile">Profile</Link>
                        <Link className="navbar-brand" to="/">Logout</Link>
                    </div>
                </div>
            </Nav>
            <div className="side1 container-fluid d-flex justify-content-center align-items-center  ">
                <div className="container-homecard d-flex p-1 m-4 ">
                    <div className="exprofile d-flex">
                        <div className="profile1">
                            <h5 className="card-title">My Profile</h5>
                            <img className="card-img-top" height="80%" src={logo} alt="profile"/>
                        </div>
                        <div className="profile2 mt-4">
                            <p className="card-title">Name</p>
                            <p className="card-text">Adi Surya Basri</p>
                            <p className="card-title">Email</p>
                            <p className="card-text">sadi34844@gmail.com</p>
                            <p className="card-title">Phone</p>
                            <p className="card-text">087865854930</p>
                            <p className="card-title">Gender</p>
                            <p className="card-text">Male</p>
                            <p className="card-title">Address</p>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit voluptate, asperiores quos quae, inventore sed voluptatibus possimus </p>
                        </div>
                    </div>
                    <div className="profile3">
                        <h5 className="card-title">My Transaction</h5>
                        <div className="card mb-3 p-3" style={{maxWidth:" 540px",backgroundColor:"#181818"}}>
                            <div className="row g-0">
                            <div className="col-md-4 ">
                                <img className="imgtrans p-3 img-fluid rounded-start" src="https://asset.kompas.com/crops/g6-UOGOiNQmwu7x_VAaYszrwfJU=/28x0:468x293/750x500/data/photo/2022/02/11/620645ca6387a.png" alt="..."/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                <h5 className="card-title">Mouse</h5>
                                <p className="card-title">Saturday, 14 Juli 2021</p>
                                <p className="card-text"><small className="text-muted">Price : Rp. 500.000</small></p>
                                <br></br>
                                <p >Sub Total: 500.000</p>
                                </div>
                            </div>
                            <div className="col-md-2 align-items-center">
                                <img  src={logo} className="img-fluid rounded-star mt-5" alt="..."/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default profile;