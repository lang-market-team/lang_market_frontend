import React, { Component } from 'react';
import {Button,  Form, FormGroup, Label, Input } from 'reactstrap';
import Cookies from 'universal-cookie';
import serverAddress from "../../serverConnection";

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            product_name: "",
            product_describe: "",
            product_type: 1,
            remain_amount: 0,
            product_image: ""
        };
    }

    changeProductName = (event) => {
        this.setState({product_name: event.target.value})
    }

    changeProductPrice = (event) => {
        this.setState({price: event.target.value})
    }

    changeProductDescribe = (event) => {
        this.setState({product_describe: event.target.value})
    }

    changeProductType = (event) => {
        if(event.target.value === "Thực phẩm"){
            this.setState({product_type: 2});
        }
        if(event.target.value === "Điện tử"){
            this.setState({product_type: 3});
        }
        if(event.target.value === "Sách"){
            this.setState({product_type: 4});
        }
        if(event.target.value === "Chăm sóc da"){
            this.setState({product_type: 5});
        }
        else{
            this.setState({product_type: 1});
        }
    }

    changeProductImage = (event) => {
        this.setState({product_image: event.target.value})
    }

    changeRemainAmount = (event) => {
        this.setState({remain_amount: event.target.value})
    }

    changeMethod = () => {
        const cookies = new Cookies();
        const {price, product_describe, product_name, product_image, product_type, remain_amount}=this.state;
        fetch(serverAddress + "api/product/create", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            price: price,
            product_name:product_name,
            product_describe: product_describe,
            product_type: product_type,
            remain_amount:remain_amount,
            product_image: product_image,
            id_seller: cookies.get('id_user')
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            window.location.href = '/seller/manage_product'
        });
    }

  render() {
    return (
      <div>
        <div className="container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="order-title">
                            Tạo sản phẩm mới
                        </div>
                    </div>
                    <div className="col-lg-10 col-12">
                    <Form>
                        <FormGroup>
                            <Label for="product_name">Tên sản phẩm</Label>
                            <Input
                            type="text"
                            name="product_name"
                            id="product_name"
                            placeholder="Ex: Macbook"
                            onChange = {this.changeProductName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_type">Loại sản phẩm</Label>
                            <Input type="select" name="product_type" id="product_type" onChange = {this.changeProductType}>
                            <option>Thời trang</option>
                            <option>Thực phẩm</option>
                            <option>Điện tử</option>
                            <option>Sách</option>
                            <option>Chăm sóc da</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Giá</Label>
                            <Input
                            type="number"
                            name="price"
                            id="price"
                            onChange = {this.changeProductPrice}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="remain_amount">Số lượng sản phẩm</Label>
                            <Input
                            type="number"
                            name="remain_amount"
                            id="remain_amount"
                            onChange = {this.changeRemainAmount}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_image">Hình ảnh</Label>
                            <Input
                            type="url"
                            name="product_name"
                            id="product_name"
                            placeholder="URL"
                            onChange = {this.changeProductImage}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_describe">Mô tả sản phẩm </Label>
                            <Input type="textarea" name="product_describe" id="product_describe" onChange = {this.changeProductDescribe} />
                        </FormGroup>
                        </Form>
                        <Button color="primary" onClick={this.changeMethod}>Tạo mới</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default CreateProduct;
