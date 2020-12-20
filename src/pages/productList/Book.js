import React, { Component } from "react";
import "../pages.css"
class Book extends Component {
  render() {
    return (
      <div className="container productlist">
        <h2>Sách</h2>
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/41/b8/7a/b32bdb87eb8fc3b2c584096f0356d77e.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/a1/64/69/c6e76edbe58ee8715d1bac449c9ef2bd.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/59/b5/3d/6d1203a1d34c6c89582c8e7a0e2998d1.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/aa/ce/e5/38cde4cbfa65e85905301a1f759d5e4d.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Book;
