import "../../css/product.css";

const Product = (props) => {

    return (
        <div className="product">
            <div className="product-image">
                <div className="img"></div>
                <div className="product-discount">-36%</div>
            </div>
            <div className="product-info">
                <div className="product-name">
                    Tên sản phẩm
                </div>
                <div className="product-description">
                    mô tả sơ lược về sản phẩm bày bán
                </div>

                <div className="flex">
                    <div className="product-price">
                        <div className="product-new-price">
                            36.99 USD
                        </div>
                        <div className="product-old-price">
                            48.56
                        </div>

                    </div>
                    <div className="product-button">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6441 7.75421V5.22754C13.6441 3.49087 12.2366 2.08337 10.5007 2.08337C8.76407 2.07587 7.34991 3.47671 7.34241 5.21337V5.22754V7.75421" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4518 17.5003H6.54815C4.58808 17.5003 3 15.9128 3 13.9544V9.35778C3 7.39945 4.58808 5.81195 6.54815 5.81195H14.4518C16.4119 5.81195 18 7.39945 18 9.35778V13.9544C18 15.9128 16.4119 17.5003 14.4518 17.5003Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
