import React, { Component } from "react";
import "../../css/order.css";
import Order from "./order";
import serverAddress from "../../serverConnection";

class Myorder extends Component {
  componentDidMount(){
   
  }
  render() {
    return (
        <div className="my-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="order-title">
                            Đơn hàng của bạn
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <Order />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default Myorder;