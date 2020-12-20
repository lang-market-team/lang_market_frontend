import React, { Component } from "react";
import "../pages.css"
class Skincare extends Component {
  render() {
    return (
      <div className="container productlist">
        <h2>Chăm sóc da</h2>
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/35/e9/fd/de5592b43a5e46550bc06d1aeaa45d63.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/9a/69/46/3502c44bcc7c2488d7645e080e205ad5.png"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/16/77/f7/e4b5b2d7a8c2ad02f5d4ec73da3385cb.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/8f/5e/35/9e613c371932865afc2ac1486be75cfb.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Skincare;
