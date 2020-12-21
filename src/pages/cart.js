import "../css/cart.css";
import CartProduct from "../components/common/cart-product";
const Cart = () => {
    return (
        <div className="cart my-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-12">
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="pay">
                            <div className="pay-box">
                                Thành tiền:
                                <div className="pay-money">
                                    <span>6,870,000đ</span>
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