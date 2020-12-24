import "../../css/order.css";
import {NavLink} from "reactstrap";
const order = () => {
    return (         
        <div className="order">
            <div className="product-img">

            </div>
            <div className="product-info">
                <div className="product-left">
                    <div className="product-name">
                        Tên sản phẩm
                    </div>
                    <div className="product-supplier">
                        <span>Cung cấp </span> Zara
                    </div>
                    <div className="product-quanlity">
                        <span>So luong: </span> 3
                    </div>
                    <div className="product-monney">
                        <span>Tong tien: </span> 1.000.000
                    </div>
                </div>
                <div className="product-right">
                    <NavLink href="/order/manageorder" className="order-manager">MANAGE</NavLink>
                    <div className="product-right-top">
                        <div className="wrapper">
                            <div className="margin-area">
                                <div className="dot one">1</div>
                                <div className="dot two">2</div>
                                <div className="dot three">3</div>
                                <div className="dot four">4</div>
                                <div className="dot five">5</div>
                                <div className="progress-bar first"></div>
                                <div className="progress-bar second"></div>
                                <div className="progress-bar third"></div>
                                <div className="progress-bar fourx"></div>
                                <div className="row message">
                                    <div className="message-1">Chờ xác nhận </div>
                                    <div className="message-2">Chờ lấy hàng</div>
                                    <div className="message-3">Đang giao</div>
                                    <div className="message-4">Đã giao</div>
                                    <div className="message-5">Đã hủy</div>
                                </div>        
                            </div>
                        </div>  
                    </div>
                </div>
            </div>   
        </div>
        
    )
}

export default order;