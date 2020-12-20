import React, { Component } from "react";
import "../pages.css"
class Food extends Component {
  render() {
    return (
      <div className="container productlist">
        <h2>Thực phẩm</h2>
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/m/e/media_007.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/ba/5e/03/2ddf43091b388d8d4b67423a5fabc37f.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/7b/85/b0/f19429872b739039f86dba049aa9471c.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/b0/aa/81/04351c47d8b00034dae0f3bca64d4d8a.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Food;
