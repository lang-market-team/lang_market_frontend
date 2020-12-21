import "../css/product-detail.css";
import Star from "../components/common/star";
const ProductDetail = () => {
    return (
        <div className="container product-detail">
            <div className="row">
                <div className="col-6">
                    <div className="product-image">

                    </div>
                </div>

                <div className="col-6">
                    <div className="product-detail-info">
                        <div className="product-supplier">
                            Nhà cung cấp: Xprinter

                        </div>
                        <div className="product-title">
                            Máy in hóa đơn Q260

                        </div>
                        <div className="product-rating">
                            <Star width="28" height="28" isActive="true" />
                            <Star width="28" height="28" isActive="true" />
                            <Star width="28" height="28" isActive="true" />
                            <Star width="28" height="28" isActive="true" />
                            <Star width="28" height="28" isActive="false" />
                        </div>
                        <div className="product-description">
                            Máy in hóa đơn Xprinter Q260 là dòng máy in hiện đại

                        </div>

                        <div className="product-price">
                            <div className="product-new-price">
                                2.061.000 VND
                            </div>


                            <div className="product-old-price">
                                2.290.000
                            </div>

                        </div>

                        <div className="product-detail-number">
                            <div className="product-number-text">
                                Số lượng:
                            </div>
                            <div className="flex">

                                <div className="number-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </div>
                                <input type="number" className="number-button number-input" />

                                <div className="number-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>


                        <div className="flex" >
                            <div className="add-cart-button">
                                Thêm vào giỏ hàng
                            <div className="add-cart-icon">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6441 7.75421V5.22754C13.6441 3.49087 12.2366 2.08337 10.5007 2.08337C8.76407 2.07587 7.34991 3.47671 7.34241 5.21337V5.22754V7.75421" stroke="#116DBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4518 17.5003H6.54815C4.58808 17.5003 3 15.9128 3 13.9544V9.35778C3 7.39945 4.58808 5.81195 6.54815 5.81195H14.4518C16.4119 5.81195 18 7.39945 18 9.35778V13.9544C18 15.9128 16.4119 17.5003 14.4518 17.5003Z" stroke="#116DBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail;