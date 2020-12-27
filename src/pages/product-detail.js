import "../css/product-detail.css";
import Star from "../components/common/star";
import React, { useState, useEffect } from 'react';
import serverAddress from "../serverConnection";
import CartStorage from "../lib/cart-storage";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import Loading from "../components/common/loading";
import {
    useParams
} from "react-router-dom";
const ProductDetail = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [amount, setAmount] = useState(1);

    // const [value, setValue] = useState(
    //     localStorage.getItem('myValueInLocalStorage') || ''
    // );

    const { id } = useParams();

    useEffect(() => {
        function findOne() {
            fetch(serverAddress + `api/product/id/${id}`, {
                method: "get",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    setLoading(false);
                    setData(result);
                    console.log(result);
                })
                .catch(console.log);

        }
        findOne();
    }, [id]);

    function ratingView() {
        let view = [];
        for (let i = 0; i < 5; i++) {
            if (i < data.rating) {
                view.push(<Star key={`${data.id_product}-${i}`} width="28" height="28" isActive="true" />);
            }
            else {
                view.push(<Star key={`${data.id_product}-${i}`} width="28" height="28" isActive="false" />);
            }

        }
        return view;

    }

    function inputChangedHandler(event) {
        let number = event.target.value;
        if (number < 0) {
            event.target.value = 0;
            number = 0;
        }

        if (number > data.remain_amount) {
            event.target.value = data.remain_amount;
            number = data.remain_amount;
        }

        setAmount(number)

    }

    function plus() {
        if (amount + 1 <= data.remain_amount) {
            setAmount(amount + 1);
        }
    }

    function minus() {
        if (amount - 1 > 0) {
            setAmount(amount - 1);
        }
    }

    function addToCart() {
        var item = data;
        item.number = amount;
        CartStorage.add(item);
        Swal.fire('Thành công!', 'Sản phẩm đã được thêm vào giỏ hàng', 'success')
    }

    if (loading || !data) {
        return Loading();
    }

    return (
        <div className="container product-detail">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="product-detail-image">
                        <img src={data.product_image} alt="product-detail-img" />
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="product-detail-info">
                        <div className="product-detail-supplier">
                            Nhà cung cấp: Xprinter

                        </div>

                        <div className="product-detail-title">
                            {data.product_name}

                        </div>
                        <div className="product-detail-rating">
                            {ratingView()}
                        </div>
                        <div className="product-detail-description">
                            {data.product_describe}

                        </div>

                        <div className="product-detail-price">
                            <div className="product-detail-new-price">
                                {data.price.toLocaleString()} Đ
                            </div>


                            {/* <div className="product-detail-old-price">
                                2.290.000
                            </div> */}

                        </div>

                        <div className="product-detail-number">
                            <div className="product-detail-number-text">
                                Số lượng:
                            </div>
                            <div className="product-detail-flex">

                                <div onClick={() => minus()} className="product-detail-number-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </div>
                                <input type="number" className="product-detail-number-button product-detail-number-input" value={amount} onChange={(event) => inputChangedHandler(event)} />

                                <div onClick={() => plus()} className="product-detail-number-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>


                        <div className="product-detail-flex" >
                            <div onClick={() => addToCart()} className="product-detail-add-cart-button">
                                Thêm vào giỏ hàng
                            <div className="product-detail-add-cart-icon">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6441 7.75421V5.22754C13.6441 3.49087 12.2366 2.08337 10.5007 2.08337C8.76407 2.07587 7.34991 3.47671 7.34241 5.21337V5.22754V7.75421" stroke="#116DBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4518 17.5003H6.54815C4.58808 17.5003 3 15.9128 3 13.9544V9.35778C3 7.39945 4.58808 5.81195 6.54815 5.81195H14.4518C16.4119 5.81195 18 7.39945 18 9.35778V13.9544C18 15.9128 16.4119 17.5003 14.4518 17.5003Z" stroke="#116DBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail;