import Star from "./star";
import "../../css/cart-product.css";
const CartProduct = () => {
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

                    <div className="product-delete-button-mobile">
                        Delete
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
                    <div className="cart-right-top">
                        <div className="cart-product-price">
                            <div className="product-new-price">
                                1.400.000 Đ
                            </div>
                            <div className="product-old-price">
                                2.000.000
                            </div>
                        </div>

                        <div className="product-number">
                            <div className="product-button-minus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                            <input />
                            <div className="product-button-add">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                        </div>


                    </div>


                    <div className="cart-right-bottom">
                        <div className="product-delete-button">
                            Delete
                    </div>
                        <div className="product-sum-money">
                            Tổng tiền <span>2.800.000 Đ</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-right-mobile">
                <div className="cart-right-top">
                    <div className="cart-product-price">
                        <div className="product-new-price">
                            1.400.000 Đ
                            </div>
                        <div className="product-old-price">
                            2.000.000
                            </div>
                    </div>

                    <div className="product-number">
                        <div className="product-button-minus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                        <input />
                        <div className="product-button-add">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                    </div>
                </div>

                <div className="product-sum-money">
                    Tổng tiền <span>2.800.000 Đ</span>
                </div>
            </div>

        </div>
    )
}

export default CartProduct;