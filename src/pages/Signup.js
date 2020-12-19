import React, { Component } from "react";
class Signup extends Component {
  render() {
    return (
      <div className="container">
        <h2>Đăng ký tài khoản</h2>
        <div class="row">
          <div class="col-sm-6">
            <form>
              <div className="form-group">
                <div>
                  <label>Loại tài khoản</label>
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="customer">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="customer"
                      name="optradio"
                      value="customer"
                      checked
                    />
                    Khách mua hàng
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="seller">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="seller"
                      name="optradio"
                      value="seller"
                    />
                    Người bán hàng
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="username">Tên đăng nhập:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Nhập tên đăng nhập"
                  ref={(ref) => {
                    this.username = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Nhập mật khẩu"
                  ref={(ref) => {
                    this.password = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordAgain">Nhập lại mật khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordAgain"
                  placeholder="Nhập lại mật khẩu"
                  ref={(ref) => {
                    this.passwordAgain = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Họ:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Nhập họ"
                  ref={(ref) => {
                    this.lastname = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstname">Tên:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Nhập tên"
                  ref={(ref) => {
                    this.firstname = ref;
                  }}
                />
              </div>
            </form>
          </div>
          <div class="col-sm-6">
            <form>
              <div className="form-group">
                <label htmlFor="street">Số nhà, tên đường:</label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  placeholder="Nhập số nhà, tên đường"
                  ref={(ref) => {
                    this.street = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="town">Xã, phường, thị trấn:</label>
                <input
                  type="text"
                  className="form-control"
                  id="town"
                  placeholder="Nhập xã, phường, thị trấn"
                  ref={(ref) => {
                    this.town = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="district">Quận, huyện:</label>
                <input
                  type="text"
                  className="form-control"
                  id="district"
                  placeholder="Nhập quận, huyện"
                  ref={(ref) => {
                    this.district = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Tỉnh, thành phố:</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Nhập tỉnh, thành phố"
                  ref={(ref) => {
                    this.city = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Nhập số điện thoại"
                  ref={(ref) => {
                    this.phone = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="district">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Nhập quận, huyện"
                  ref={(ref) => {
                    this.email = ref;
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.login}
          >
            Đăng ký
          </button>{" "}
        </div>
      </div>
    );
  }
}
export default Signup;
