import React, { Component } from "react";
import CarouselComponent from "../components/Carousel";
import Product from "../components/common/product";
import EProduct from "../entity/productDto";
import "../css/home.css"
class Home extends Component {

  list = [];
  listView = [];

  constructor() {
    super();
    for (let index = 0; index < 12; index++) {
      var item = new EProduct();
      item.id_product = index;
      item.price = 2290000;
      item.product_name = `Máy in hóa đơn Q260 - ${index}`;
      item.product_describe = "Máy in hóa đơn Xprinter Q260 là dòng máy in hiện đại";
      item.rating = index / 5;
      this.list.push(item);
    }

    this.listView = this.list.map(item => (
      <div className="col-xl-3 col-lg-4  col-sm-6">
        <Product data={item} />
      </div>
    ));
  }

  render() {
    return (
      <div className="my-container">
        <div className="container">
          <CarouselComponent />
        </div>
        <div className="top-product">
          <div className="top-product-header">
            <div className="top-product-title">Top sản phẩm bán chạy</div>
            <div className="top-product-show-all-button">
              <span>Xem Tất cả</span>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </i></div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {this.listView}

            </div>
          </div>
        </div>

        <div className="news">
          <div className="news-title">TIN TỨC VÀ KHUYẾN MÃI</div>
          <div className="news-slide container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="blog">
                  <div className="blog-img">

                  </div>
                  <div className="flex">

                    <div className="blog-time">
                      <div className="blog-day">
                        19
                  </div>
                      <div className="blog-month">
                        Tháng 10
                  </div>
                    </div>
                    <div className="blog-info">
                      <div className="blog-auth">
                        Đăng bởi: Anh Dũng
                  </div>
                      <div className="blog-title">
                        Sẽ tiếp kiệm được bao nhiêu khi sử dụng
                  </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="blog">
                  <div className="blog-img">

                  </div>
                  <div className="flex">

                    <div className="blog-time">
                      <div className="blog-day">
                        19
                  </div>
                      <div className="blog-month">
                        Tháng 10
                  </div>
                    </div>
                    <div className="blog-info">
                      <div className="blog-auth">
                        Đăng bởi: Anh Dũng
                  </div>
                      <div className="blog-title">
                        Sẽ tiếp kiệm được bao nhiêu khi sử dụng
                  </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="blog">
                  <div className="blog-img">

                  </div>
                  <div className="flex">

                    <div className="blog-time">
                      <div className="blog-day">
                        19
                  </div>
                      <div className="blog-month">
                        Tháng 10
                  </div>
                    </div>
                    <div className="blog-info">
                      <div className="blog-auth">
                        Đăng bởi: Anh Dũng
                  </div>
                      <div className="blog-title">
                        Sẽ tiếp kiệm được bao nhiêu khi sử dụng
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}
export default Home;
