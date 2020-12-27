import "../../css/order.css";
import React, { useState, useEffect } from 'react';
import serverAddress from "../../serverConnection";

const Order = (props) => {
    const format = "MM/dd/yyyy hh:mm:ss";
    const type_account=getCookie('type_account')
    const [edit_status, setEdit_status] = useState(false);
    const [delivery_time, setDelivery_time] = useState(props.order.delivery_time ||"");
    const [status_order, setStatus_order] = useState(1);
    function convertTimeToString(time, format){
        const date = new Date(time);
        const year = date.getFullYear();
        const mon = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hour = ("0" + date.getHours()).slice(-2);
        const min = ("0" + date.getMinutes()).slice(-2);
        const second = ("0" + date.getSeconds()).slice(-2);
    
        return format
            .replace("YYYY", year)
            .replace("yyyy", year)
            .replace("dd", day)
            .replace("DD", day)
            .replace("MM", mon)
            .replace("hh", hour)
            .replace("mm", min)
            .replace("ss", second);
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    function Edit() {
        setEdit_status(true)
    }
    function Cancel() {
        setEdit_status(false)
        
    }
    function Edit_Order_status(status){
        setStatus_order(status)
    }
    function handleChange(text) {
        var value = text.target.value;
        setDelivery_time(value)
      }
    function Save(){
        fetch(serverAddress + "api/order/update_status_of_order", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id_order: props.order.id_order,
              status_order: status_order,
            }),
        })
        let date = new Date(delivery_time); 
        let milliseconds = date.getTime();
        fetch(serverAddress + "api/order/update_delivery_time_of_order", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id_order: props.order.id_order,
              delivery_time: milliseconds,
            }),
        })
    }
    return (        
        <div className="order">
            <div className="order-product-info">
                <div className="product-left">
                    <div className="order-product-name">
                        <span>Mã đơn hàng: </span> {props.order.id_order}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thời gian tạo đơn hàng: </span> {convertTimeToString(props.order.create_time,format)}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thời gian giao dự kiến: </span> 
                        {edit_status===false?
                         props.order.delivery_time===null?"":convertTimeToString(props.order.delivery_time,format)
                        :
                        <input
                            type="text"
                            className="order-delivery_time"
                            placeholder="Thời gian giao hàng"
                            onChange={text=>handleChange(text)}
                        />
                        }
                       
                    </div>
                    <div className="manage-text">
                        <span>Tên người nhận: </span> {getCookie("last_name")+getCookie("first_name")}
                    </div>
                    <div className="manage-text">
                        <span>Địa chỉ: </span> {props.order.delivery_address}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Tổng giá: </span> {props.order.total_price}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thanh toán: </span> {props.order.paid_order===true?'Trước':'Sau'}
                    </div>
                </div>
                <div className="order-product-right">
                    <a href={`/order/manageorder/${props.order.id_order}` } >
                        <div className="order-manager">MANAGE</div>     
                    </a>     
                    <div className="wrapper">
                        <div className="margin-area">
                            {edit_status===false?
                            <div>
                                <div className="dot one" >1</div>
                                {props.order.status_order>=2 ?  <div className="dot two-active" >2</div>: <div  className="dot two-inactive">2</div>}
                                {props.order.status_order>=3 ?  <div className="dot three-active">3</div>: <div className="dot three-inactive">3</div>}
                                {props.order.status_order===4 ?  <div className="dot four-active">4</div>: <div className="dot four-inactive">4</div>}
                            </div>                                    
                            :
                            <div> 
                                <div className="dot one" onClick={()=>Edit_Order_status(1)}>1</div>
                                {status_order>=2 ?  <div className="dot two-active" onClick={()=>Edit_Order_status(2)}>2</div>: <div onClick={()=>Edit_Order_status(2)} className="dot two-inactive">2</div>}
                                {status_order>=3 ?  <div className="dot three-active" onClick={()=>Edit_Order_status(3)}>3</div>: <div onClick={()=>Edit_Order_status(3)} className="dot three-inactive">3</div>}
                                {status_order===4 ?  <div className="dot four-active" onClick={()=>Edit_Order_status(4)}>4</div>: <div onClick={()=>Edit_Order_status(4)} className="dot four-inactive">4</div>}
                            </div>
                            }
                           
                            <div className="progress-bar first"></div>
                            <div className="progress-bar second"></div>
                            <div className="progress-bar third"></div>
                            <div className="row message">
                                <div className="message-1">Chờ xác nhận </div>
                                <div className="message-2">Đang giao</div>
                                <div className="message-3">Đã giao</div>
                                <div className="message-4">Đã hủy</div>
                            </div>        
                        </div>
                    </div> 
                    {type_account==2&&
                        <div className="order-button-row">
                            <button type="button" className="order-btn-edit" onClick={()=>Edit()}>
                                Edit
                            </button>{" "}  
                            <button type="button" className="order-btn-save" onClick={()=>Save()}>
                                Save
                            </button>{" "}  
                            <button type="button" className="order-btn-edit" onClick={()=>Cancel()}>
                                Cancel
                            </button>{" "}  
                        </div>
                    }
                </div>
            </div>   
        </div>
        
    )
}

export default Order;