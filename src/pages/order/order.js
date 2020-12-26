import "../../css/order.css";
const order = (props) => {
    
    return (        
        <div className="order">
            <div className="order-product-info">
                <div className="product-left">
                    <div className="order-product-name">
                        <span>Mã đơn hàng: </span> {props.order.id_order}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thời gian tạo đơn hàng: </span> {props.order.create_time}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thời gian giao dự kiến: </span> {props.order.delivery_time}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Tổng giá: </span> {props.order.total_price}
                    </div>
                    <div className="order-product-quanlity">
                        <span>Thanh toán: </span> Trước
                    </div>
                </div>
                <div className="order-product-right">
                    <a href={`/order/manageorder/${props.order.id_order}` } >
                        <div className="order-manager">MANAGE</div>     
                    </a>         
                    <div className="wrapper">
                            <div className="margin-area">
                                <div className="dot one">1</div>
                                {props.order.status_order>=2 ?  <div className="dot two-active">2</div>: <div className="dot two-inactive">2</div>}
                                {props.order.status_order>=3 ?  <div className="dot three-active">3</div>: <div className="dot three-inactive">3</div>}
                                {props.order.status_order===4 ?  <div className="dot four-active">4</div>: <div className="dot four-inactive">4</div>}
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