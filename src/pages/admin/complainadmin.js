import {Nav, Button} from "react-bootstrap";
import logo from "../../components/img/frame.png";
import {Link} from "react-router-dom";

const complaincs = () => {
    return (
        <>
            <Nav className="navbar m-2 justify-content-center align-items-center m-0 p-0">
                <div className="container m-0 p-0">
                    <img src={logo} alt="logo" className="logoi" />
                    <div className="align-items-end">
                        <Link className="navbar-brand card-title" to="/complainadmin">Complain</Link>
                        <Link className="navbar-brand " to="/category">Category</Link>
                        <Link className="navbar-brand" to="/product">Product</Link>
                        <Link className="navbar-brand" to="/">Logout</Link>
                    </div>
                </div>
            </Nav>
            <div className="container">
                <div className="messaging">
                    <div className="inbox_msg">
                        <div className="inbox_people">
                        <div className="headind_srch">
                            <div className="recent_heading">
                            <h4>Recent</h4>
                            </div>
                            <div className="srch_bar">
                            <div className="stylish-input-group">
                                <input type="text" className="search-bar"  placeholder="Search" />
                                <span className="input-group-addon">
                                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                </span> </div>
                            </div>
                        </div>
                        <div className="inbox_chat">
                            <div className="chat_list active_chat">
                            <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="chat_ib">
                                <h5>Cs 1</h5>
                                <p>Hello admin. I Need Your Help</p>
                                </div>
                            </div>
                            </div>
                            <div className="chat_list active_chat">
                                <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="chat_ib">
                                    <h5>Cs 2</h5>
                                    <p>Hello admin. I have problem</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="mesgs">
                        <div className="msg_history">
                            <div className="incoming_msg">
                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                            <div className="received_msg">
                                <div className="received_withd_msg">
                                <p>Hello admin. I Need Your Help</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="type_msg">
                            <div className="input_msg_write">
                            <input type="text" className="write_msg" placeholder="Type a message" />
                            <Button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        </div>
                    </div>             
                </div>
            </div>
        </>
    );
};

export default complaincs;