import Star from "../../components/common/star";
import "../../css/order.css";
const OrderProduct = () => {
    return (
        <div className="order-product">
            <div className="order-product-img">

            </div>
            <div className="order-product-info">
                <div className="order-product-left">
                    <div className="order-product-name">
                        Tên sản phẩm
                    </div>
                    <div className="order-product-description">
                        mô tả sơ lược về sản phẩm bày bán
                    </div>
                    <div className="order-product-supplier">
                        <span>Cung cấp bởi</span> Zara
                    </div>
                    <div className="order-product-status">
                        <span>Tình trạng</span> mới
                    </div>
                    <div className="order-product-trademark">
                        <span>Thương hiệu</span> OEM
                    </div>
                </div>
                <div className="order-right">
                    <div className="order-right-bottom">
                        <div className="order-product-sum-money">
                            Số lượng <span>2</span>
                        </div>
                        <div className="order-product-sum-money">
                            Tổng tiền <span>2.800.000 Đ</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderProduct;