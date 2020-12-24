import React, { Component } from "react";
import "../../css/order.css";
import Order from "./order";
class Myorder extends Component {
  render() {
    return (
        <div className="cart my-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-title">
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