import "../css/product-detail.css";
import Star from "../components/common/star";
import React, { useState, useEffect } from 'react';
import serverAddress from "../serverConnection";
import CartStorage from "../lib/cart-storage";
import Role from "../lib/role";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import Loading from "../components/common/loading";
import {
    useParams
} from "react-router-dom";
const ProductDetail = () => {

    const [dialogLoading, setDialogLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [listComment, setListComment] = useState([]);
    const [amount, setAmount] = useState(1);
    const [dialogRating, setDialogRating] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
    const [content, setContent] = useState('');
    // const [value, setValue] = useState(
    //     localStorage.getItem('myValueInLocalStorage') || ''
    // );

    const { id } = useParams();


    useEffect(() => {
        function getAllComment() {
            fetch(serverAddress + `api/comment/id_product=${id}`, {
                method: "get",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    setLoading(false);
                    setListComment(result);
                    console.log(result);
                })
                .catch(console.log);
        }
        function findOne() {
            fetch(serverAddress + `api/product/id/${id}`, {
                method: "get",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    getAllComment();
                    setData(result);
                    console.log(result);
                })
                .catch(console.log);

        }
        if (loading) {
            findOne();
        }
    }, [loading || dialogLoading]);


    function renderTime(time_create) {
        var timeswap = new Date(time_create);
        return "Nhận xét vào " + timeswap.getDate() + " tháng " + (timeswap.getMonth() + 1) + ", " + timeswap.getFullYear();
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
        Swal.fire('Thành công!', 'Sản phẩm đã được thêm vào giỏ hàng', 'success');
    }

    function addComment() {
        setDialogLoading(true);
        fetch(serverAddress + "api/comment/create", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id_buyer: Role.getUserId(),
                id_product: data.id_product,
                time_create: Date.now(),
                rating_comment: dialogRating,
                content_comment: content,

            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data === 1) {
                    setDialogLoading(false);
                    setShowDialog(false);
                    setLoading(true);
                    Swal.fire('Thành công!', 'Thêm bình luận thành công', 'success')

                } else {
                    Swal.fire('Thất bại!', '', 'error')
                }
            });
    }

    function openDialog() {
        setDialogRating(0);
        setShowDialog(true);
    }

    if (dialogLoading || loading || !data) {
        return Loading();
    }

    return (
        <div>
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
                                <Star width="28" height="28" isActive={data.rating >= 1 ? "true" : "false"} />
                                <Star width="28" height="28" isActive={data.rating >= 2 ? "true" : "false"} />
                                <Star width="28" height="28" isActive={data.rating >= 3 ? "true" : "false"} />
                                <Star width="28" height="28" isActive={data.rating >= 4 ? "true" : "false"} />
                                <Star width="28" height="28" isActive={data.rating >= 5 ? "true" : "false"} />
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
            <div className="tabs">
                <div className="container-fluid">
                    <div className="row text-center">
                        <ul className="tab-title">


                            <li id="review-tab" className="active">
                                Khách hàng nhận xét
                    </li>
                        </ul>

                        <div className="col-12">
                            <div id="review" className="tab-content review">
                                <div className="review-comment">
                                    <div className="review-hearder">
                                        <div className="review-total flex">
                                            Đánh giá <div className="review-total-number"></div>
                                        </div>


                                        <div onClick={() => openDialog()} className="add-review-button">
                                            Viết đánh giá
                                    </div>

                                    </div>



                                    {
                                        listComment.map((item, i) => (

                                            <div style={{ marginBottom: "30px" }} >
                                                <div style={{ alignItems: "center" }} className="flex">
                                                    <div className="user-image">

                                                    </div>
                                                    <div className="user-info">
                                                        <div className="user-name">
                                                            {item.last_name + " " + item.first_name}
                                                        </div>
                                                        <div className="review-time">
                                                            {renderTime(item.time_create)}

                                                        </div>
                                                        <div style={{ display: "flex" }} className="review-star-list">
                                                            <Star width="20" height="20" isActive={item.rating_comment >= 1 ? "true" : "false"} />
                                                            <Star width="20" height="20" isActive={item.rating_comment >= 2 ? "true" : "false"} />
                                                            <Star width="20" height="20" isActive={item.rating_comment >= 3 ? "true" : "false"} />
                                                            <Star width="20" height="20" isActive={item.rating_comment >= 4 ? "true" : "false"} />
                                                            <Star width="20" height="20" isActive={item.rating_comment >= 5 ? "true" : "false"} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-content">
                                                    {item.content_comment}
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {showDialog ? <div id="dialog-overlay"></div> : ""}
            {showDialog ? <div className="add-reivew-dialog">
                <div className="header">
                    <div className="title">
                        Viết đánh giá
    </div>
                    <i onClick={() => setShowDialog(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </i>
                </div>
                <div id="add-review-form" method="POST" className="signup-form">

                    <ul className="errorMessages"></ul>
                    <div style={{ margin: "0" }} className="row">

                        <div style={{ display: "flex", width: "100%", justifyContent: "center", textAlign: "center", marginTop: "10px" }}>

                            <div onClick={() => setDialogRating(1)} style={{ marginRight: "5px" }}>
                                <Star width="20" height="20" isActive={dialogRating >= 1 ? "true" : "false"} />
                            </div>
                            <div onClick={() => setDialogRating(2)} style={{ marginRight: "5px" }}>
                                <Star width="20" height="20" isActive={dialogRating >= 2 ? "true" : "false"} />
                            </div>
                            <div onClick={() => setDialogRating(3)} style={{ marginRight: "5px" }}>
                                <Star width="20" height="20" isActive={dialogRating >= 3 ? "true" : "false"} />
                            </div>
                            <div onClick={() => setDialogRating(4)} style={{ marginRight: "5px" }}>
                                <Star width="20" height="20" isActive={dialogRating >= 4 ? "true" : "false"} />
                            </div>
                            <div onClick={() => setDialogRating(5)} style={{ marginRight: "5px" }}>
                                <Star width="20" height="20" isActive={dialogRating >= 5 ? "true" : "false"} />
                            </div>

                        </div>
                        <div className="col-12">
                            <div className="input-group row">
                                <div htmlFor="review-content" className="signup-label  mb-2 col-12">Nội dung</div>
                                <textarea style={{ paddingLeft: "10px" }} id="review-content" type="text" name="review-content" className="signup-input col-12" onInput={e => setContent(e.target.value)} ></textarea>
                            </div>



                        </div>

                    </div>

                    <div className="footer">
                        <div onClick={() => { addComment() }} id="submit" name="login" className="done-button">Thêm</div>
                    </div>



                </div>
            </div> : ""}



        </div>

    )
}

export default ProductDetail;