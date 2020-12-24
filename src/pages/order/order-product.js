import Star from "../../components/common/star";
import "../../css/cart.css";
const OrderProduct = () => {
    return (
        <div className="cart-product">
            <div className="cart-img">

            </div>
            <div className="cart-info">
                <div className="cart-img-mobile">

                </div>
                <div className="cart-left">
                    <div className="cart-product-name">
                        Tên sản phẩm
                    </div>
                    <div className="cart-product-description">
                        mô tả sơ lược về sản phẩm bày bán
                    </div>
                    <div className="cart-product-rating">
                        <Star width="18" height="18" isActive="true" />
                        <Star width="18" height="18" isActive="true" />
                        <Star width="18" height="18" isActive="true" />
                        <Star width="18" height="18" isActive="true" />
                        <Star width="18" height="18" isActive="false" />
                    </div>
                    <div className="cart-product-supplier">
                        <span>Cung cấp bởi</span> Zara
                    </div>
                    <div className="cart-product-status">
                        <span>Tình trạng</span> mới
                    </div>
                    <div className="cart-product-trademark">
                        <span>Thương hiệu</span> OEM
                    </div>
                </div>
                <div className="cart-right">
                    <div className="cart-right-bottom">
                        <div className="product-sum-money">
                            Số lượng <span>2</span>
                        </div>
                        <div className="product-sum-money">
                            Tổng tiền <span>2.800.000 Đ</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderProduct;