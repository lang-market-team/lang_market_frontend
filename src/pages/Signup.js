import React, { Component } from "react";
import serverAddress from "../serverConnection";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.state = {
      statusSignup: "",
    };
  }
  signup() {
    fetch(serverAddress + "api/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.username.value,
        pass: this.password.value,
        first_name: this.firstname.value,
        last_name: this.lastname.value,
        street: this.street.value,
        town: this.town.value,
        district: this.district.value,
        province: this.province.value,
        phonenumber: this.phonenumber.value,
        email: this.email.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === 1) {
          this.setState({ statusLogin: "Đăng ký thành công" });
          
        } else {
          this.setState({ statusLogin: "Đăng ký thất bại" });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Đăng ký tài khoản</h2>
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <div>
                  <label>Loại tài khoản</label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="customer">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="customer"
                      name="optradio"
                      value="customer"
                      defaultChecked
                    />
                    Khách mua hàng
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="seller">
                    <input
                      type="radio"
                      className="form-check-input"
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
          <div className="col-sm-6">
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
                <label htmlFor="province">Tỉnh, thành phố:</label>
                <input
                  type="text"
                  className="form-control"
                  id="province"
                  placeholder="Nhập tỉnh, thành phố"
                  ref={(ref) => {
                    this.province = ref;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phonenumber">Số điện thoại:</label>
                <input
                  type="number"
                  className="form-control"
                  id="phonenumber"
                  placeholder="Nhập số điện thoại"
                  ref={(ref) => {
                    this.phonenumber = ref;
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
            onClick={this.signup}
          >
            Đăng ký
          </button>
          <p className="text-danger">{this.state.statusLogin}</p>
        </div>
      </div>
    );
  }
}
export default Signup;
