import React, { useState, useEffect } from 'react';
import CarouselComponent from "../components/Carousel";
import Product from "../components/common/product";
import serverAddress from "../serverConnection";
import "../css/home.css"
const Home = () => {

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  if(!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
 }

  function getList() {
    fetch(serverAddress + "api/product", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setList(data);
      })
      .catch(console.log);

  }

  useEffect(() => {
    getList();
  }, [loading]);

  if (loading || list.length === 0) {
    return null;
  }

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
            {
              list.map((item, i) => (

                <div className="col-xl-3 col-lg-4  col-sm-6">

                  <Product key={`home-product-${i}`} data={item} />

                </div>
              ))
            }

          </div>
        </div>
      </div>

      <div className="news">
        <div className="news-title">TIN TỨC VÀ KHUYẾN MÃI</div>
        <div className="news-slide container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
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
            <div className="col-lg-4 col-md-6 col-12">
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
            <div className="col-lg-4 col-md-6 col-12">
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
export default Home;
