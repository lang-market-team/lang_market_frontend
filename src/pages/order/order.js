import "../../css/order.css";
import {NavLink} from "reactstrap";
const order = () => {
    return (         
        <div className="order">
            <div className="order-product-info">
                <div className="product-left">
                    <div className="order-product-name">
                        <span>Mã đơn hàng: </span> ID
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thời gian tạo đơn hàng: </span> Time
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thời gian giao dự kiến: </span> Time
                    </div>
                    <div className="order-product-quanlity">
                        <span>Tổng giá: </span> Price
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thanh toán: </span> Trước
                    </div>
                </div>
                <div className="order-product-right">
                    <NavLink href="/order/manageorder" className="order-manager">MANAGE</NavLink>              
                    <div className="wrapper">
                            <div className="margin-area">
                                <div className="dot one">1</div>
                                <div className="dot two">2</div>
                                <div className="dot three">3</div>
                                <div className="dot four">4</div>
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
                </div>
            </div>   
        </div>
        
    )
}

export default order;