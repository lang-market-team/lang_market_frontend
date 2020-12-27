import "../../css/order.css";
import {
    useParams
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import serverAddress from "../../serverConnection";
import OrderProduct from "./order-product";

const Manageorder = () => {
    const { id } = useParams();
    const [data_order, setData_order] = useState([]);
    const type_account= getCookie('type_account')

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    useEffect(() => {
        function findOne() {
            let ca=getCookie("id_user")
            if (type_account==="3") {
                fetch(serverAddress + "api/order/id_buyer="+ca.toString(), {
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        let order= data.filter(order=> order.id_order==id)
                        setData_order(order[0])
                    });
                }
            else if (type_account==="2"){
                fetch(serverAddress + "api/order/id_seller="+ca.toString(), {
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        console.log(id)
                        let order= data.filter(order=> order.id_order==id)
                        setData_order(order[0])
                    });
                }
            }
           
        findOne();
    }, [id]);
    
    return (
        <div className="my-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="order-title">
                            Chi tiết đơn hàng
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <OrderProduct />
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="order-pay-box">
                            <div className="">
                                Tổng Giá trị:
                                <div className="order-pay-money">
                                    <span>{data_order.total_price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manageorder;