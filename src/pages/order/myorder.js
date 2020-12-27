import React, { Component } from "react";
import "../../css/order.css";
import Order from "./order";
import serverAddress from "../../serverConnection";

class Myorder extends Component {
    state={
        data_order:[]
    }

    getCookie(cname) {
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
    componentDidMount(){
        let ca=this.getCookie("id_user")
        const type_account= this.getCookie('type_account')
        if (type_account==="3") {
            fetch(serverAddress + "api/order/id_buyer="+ca.toString(), {
                method: "get",
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => res.json())
            .then((data) => {
                this.setState({data_order:data})
            });
        }
        else if (type_account==="2"){
            fetch(serverAddress + "api/order/id_seller="+ca.toString(), {
                method: "get",
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => res.json())
            .then((data) => {
                this.setState({data_order:data})
            });
        }       
    }
  render() {
    const {data_order}=this.state
    return (
        <div className="my-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="order-title">
                            Đơn hàng của bạn
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        {data_order.map((order,index)=>(
                            <Order key={`order-${index}`} order={order}/>
                        ))}
                      
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default Myorder;