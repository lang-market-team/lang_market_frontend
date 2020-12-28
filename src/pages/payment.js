
import React, { useState } from 'react';
import CartStorage from "../lib/cart-storage";
import Role from "../lib/role";
import serverAddress from "../serverConnection";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Loading from "../components/common/loading";
import "../css/payment.css";
import { useHistory } from "react-router-dom";
const Payment = () => {
    const history = useHistory();
    const [isPaid, setIsPaid] = useState(false);
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    async function createOrder(item) {

        return await fetch(serverAddress + "api/order/create", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                order: {
                    id_buyer: Role.getUserId(),
                    id_seller: item.id_seller,
                    paid_order: isPaid,
                    create_time: Date.now(),
                    delivery_address: address,
                },
                orderDetailList: item.list,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    return false;
                }
                else {
                    return true;
                }

            });
    }

    async function orderOnClick() {
        var list = CartStorage.get();
        var newList = []
        list.forEach(olditem => {
            const index = newList.findIndex(newItem => newItem.id_seller === olditem.id_seller);
            if (index === -1) {
                let data = {
                    id_seller: olditem.id_seller,
                    list: []
                }
                newList.push(data);
            }
        });



        list.forEach(olditem => {
            newList.forEach(newItem => {
                if (newItem.id_seller === olditem.id_seller) {
                    const index = newItem.list.findIndex(ni => ni.id_product === olditem.id_product);
                    if (index === -1) {
                        newItem.list.push({
                            id_product: olditem.id_product,
                            price: olditem.price,
                            amount: olditem.number,
                        });
                    }
                }
            });
        });

        var check = true;
        setLoading(true);

        // var result = Promise.all(newList.map((item) => createOrder(item)));
        for (let index = 0; index < newList.length; index++) {
            check = await createOrder(newList[index]);
            if (!check) {
                setLoading(false);
                Swal.fire('Thất bại!', '', 'error')
                break;
            }
        }

        if (check) {
            CartStorage.clear();
            setLoading(false);

            Swal.fire('Thành công!', 'Đặt đơn hàng thành công', 'success').then(() => {
                let path = `order/myorder`;
                history.push(path);
            })
        }
        console.log(newList);
    }

    if (loading) {
        return Loading();
    }

    return (
        <div className="payment container">
            <div className="row">
                <div className="col-12">
                    <div className="title">
                        1.Chọn hình thức thanh toán
                    </div>
                </div>
                <div className="col-12">
                    <div className="delivery-type">
                        <div onClick={() => setIsPaid(false)} className={!isPaid ? "card active" : "card"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <div className="card-title">
                                Khi nhận hàng
                        </div>
                        </div>
                        <div onClick={() => setIsPaid(true)} className={isPaid ? "card active" : "card"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            <div className="card-title">
                                Trực tuyến
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="title">
                        2.Nhập địa chỉ giao hàng
                    </div>
                    <input placeholder="Tỉnh quận huyện số nhà tên đường" onInput={e => setAddress(e.target.value)}></input>
                </div>

                <div className="col-lg-4 col-12">

                    <div className="orderbutton" onClick={() => orderOnClick()}>Đặt hàng</div>
                </div>
            </div>
        </div>
    )
}

export default Payment;