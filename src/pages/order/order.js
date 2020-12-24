import "../../css/cart-product.css";
const order = () => {
    return (
        <div className="cart-product">
            <div className="cart-img">

            </div>
            <div className="cart-info">
                <div className="cart-left">
                    <div className="cart-product-name">
                        Tên sản phẩm
                    </div>
                    <div className="cart-product-description">
                        Mô tả sơ lược về sản phẩm bày bán
                    </div>
                    <div className="cart-product-supplier">
                        <span>Cung cấp bởi</span> Zara
                    </div>
                    <div className="">
                        Số lượng
                    </div>
                    <div className="">
                        3
                    </div>
                    <div className="">
                        Tổng tiền
                    </div>
                    <div className="">
                        3
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
                    
                    </div>
                 
                </div>
            </div>      
        </div>
    )
}

export default order;