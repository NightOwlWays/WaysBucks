import { Modal } from 'react-bootstrap';
import barcode from "./img/barcode.png";
import gmbr from "./img/Product 1.png";
import logo from "./img/WaysBucks (1) 1.png";

export default function Modaltransaction(props) {
    console.log(props.product);
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body className="d-flex justify-content-center">
            <div className="card p-3" style={{maxWidth:" 540px",backgroundColor:"#efa9b0"}}>
                <div className="row g-0">
                    <div className="row col-10">
                    <div className="row col-12">
                            <div className="col-md-4 ">
                                <img className="imgtrans p-3 img-fluid rounded-start" src={gmbr} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">Ice Coffe Palm Sugar</h5>
                                <p className="card-title"><strong>Saturday</strong>, 14 Juli 2021</p>
                                <br></br>
                                <p className="card-text coklat"><small>Toping : Bill</small></p>
                                <p className="card-text coklat"><small className="text-muted">Price : Rp. 500.000</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="row col-12">
                            <div className="col-md-4 ">
                                <img className="imgtrans p-3 img-fluid rounded-start" src={gmbr} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">Ice Coffe Palm Sugar</h5>
                                <p className="card-title"><strong>Saturday</strong>, 14 Juli 2021</p>
                                <br></br>
                                <p className="card-text coklat"><small>Toping : Bill</small></p>
                                <p className="card-text coklat"><small className="text-muted">Price : Rp. 500.000</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 align-items-center">
                        <img  src={logo} className="img-fluid rounded-star mt-2" alt="..."/>
                        <img  src={barcode} className="img-fluid rounded-star mt-3" alt="..."/>
                        <h5 className="status mt-3">On The Wayt</h5>
                        <p className="coklat mt-2" style={{fontSize:"x-small"}}><strong>Sub Total: 69.000</strong></p>
                    </div>
                </div>
            </div>
        </Modal.Body>
        </Modal>
    );
}