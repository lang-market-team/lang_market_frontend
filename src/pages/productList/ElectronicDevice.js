import React, { Component } from "react";
import "../pages.css"
class ElectronicDevice extends Component {
  render() {
    return (
      <div className="container productlist">
        <h2>Đồ điện tử</h2>
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/6e/34/fc/08bbe7b1383a11e96d0530b5f1c2465e.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/78/1a/43/e7c53b0158b775d555988491b01d1103.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/fc/d4/c2/57d4ad7e39558d28c435cd1cf4ee657e.png"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/38/51/11/8af43bc52fa8570f7dc3bbfd15933376.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ElectronicDevice;
