import React, { Component } from "react";
import "../pages.css"
class Fashion extends Component {
  render() {
    return (
      <div className="container productlist">
        <h2>Thời trang</h2>
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/200x200/ts/product/7c/07/6d/e7a10b564cbd03792648f9f7034ae57d.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/56/0f/04/b901d8b5fd0293595159f15b3143a4b5.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/40/8e/96/13f7f63ed0b8609deb54a05a5aa07ae4.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://salt.tikicdn.com/cache/280x280/ts/product/93/0d/fe/98875157cde7076aaccde10399dbefd0.jpg"
              className="img-thumbnail img-fluid"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Fashion;
