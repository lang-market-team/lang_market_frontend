class EProduct {
    id_product; //int
    price; //int
    product_name; // string
    product_describe; // string
    rating; // int
    remain_amount; //int
    product_image; //string
    product_type; //int
    amount//int
    seller; // object
    comment_list; // list

    constructor() {
        this.comment_list = [];
        this.amount = 1;
    }
}

export default EProduct;