import "../../css/order.css";
import OrderProduct from "./order-product";
const manageorder = () => {
    return (
        <div className="cart my-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-title">
                            Chi tiết đơn hàng
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <OrderProduct />
                        <OrderProduct />
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="pay-box">
                            <div className="manage-text">
                                <span>Tên người nhận: </span> Ten Nguoi Nhan
                            </div>
                            <div className="manage-text">
                                <span>Địa chỉ: </span> Ki tuc xa khu A
                            </div>
                            <div className="">
                                Giá trị:
                                <div className="pay-money">
                                    <span>6,870,000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default manageorder;