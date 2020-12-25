import "../css/cart.css";
import CartProduct from "../components/common/cart-product";
import CartStorage from "../lib/cart-storage";
import React, { useState, useEffect } from 'react';
const Cart = () => {

    const [list, setList] = useState(CartStorage.get());
    const [length, setLength] = useState(0);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        setLength(list.length);
        setSum(() => {
            let s = 0
            if (list) {
                list.forEach(item => {
                    s += item.price * item.number;
                });
            }
            return s;
        })
    }, [list]);

    function deleteFromCart(id) {
        CartStorage.delete(id);
        setList(CartStorage.get());

    }



    function plus(id) {

        const newList = list.map((item) => {
            if (item.id_product === id) {
                let updatedItem = item
                if (updatedItem.number + 1 <= updatedItem.remain_amount) {
                    updatedItem.number += 1;
                }
                return updatedItem;
            }

            return item;
        });

        setList(newList);



    }

    function minus(id) {

        const newList = list.map((item) => {
            if (item.id_product === id) {
                let updatedItem = item
                if (updatedItem.number - 1 > 0) {
                    updatedItem.number += -1;
                }
                return updatedItem;
            }

            return item;
        });
        setList(newList);

    }

    return (
        console.log(list),
        <div className="cart">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="cart-title">
                            Giỏ hàng của bạn <span>({length} sản phẩm)</span>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        {
                            list.map((item, i) => {
                                item.delete = deleteFromCart;

                                item.plus = plus;
                                item.minus = minus;
                                return (<CartProduct key={`cart-product-${i}`} data={item} />)
                            })
                        }

                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="pay">
                            <div className="pay-box">
                                Thành tiền:
                                <div className="pay-money">
                                    <span>{sum.toLocaleString()}đ</span>
                                    (Đã bao gồm VAT nếu có)
                                </div>
                            </div>

                            <div className="pay-button">
                                Tiến hành đặt hàng
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;