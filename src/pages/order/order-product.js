import "../../css/order.css";
import {
    useParams
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import serverAddress from "../../serverConnection";

const OrderProduct = () => {
    const { id } = useParams();
    const [order_product, setOrder_product] = useState([]);

    useEffect(() => {
        function findOne() {
            fetch(serverAddress + `api/order/id_order=${id}`, {
                method: "get",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    setOrder_product(result)
                })
                .catch(console.log);

        }
        findOne();
    }, [id]);

    return (
        order_product.map((product,index)=>(
            <div className="order-product" key={index}>
                <div className="order-product-img">
                    <img src={product.product_image}/>
                </div>
                <div className="order-product-info">
                    <div className="order-product-left">
                        <div className="order-product-name">
                            {product.product_name}
                        </div>
                        <div className="order-product-sum-money">
                            Số lượng <span>{product.amount}</span>
                        </div>
                        <div className="order-product-sum-money">
                            Đơn giá <span>{product.price}</span>
                        </div>
                    </div>
                </div>
        </div>
        ))  
    )
}

export default OrderProduct;