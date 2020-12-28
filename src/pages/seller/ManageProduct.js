import React, { Component } from 'react';

import { Table, ButtonToggle, Button, Form, FormGroup, Label, Input,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cookies from 'universal-cookie';
import serverAddress from "../../serverConnection";

class ManageProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product_details : [],
      modal:false,
      price: 0,
      product_name: "",
      product_describe: "",
      product_type: 1,
      remain_amount: 0,
      product_image: "",
      id_product: ""
    };
  }

  

  openModal = (id, name, type, price, remain, img, desc) => {
    this.setState({id_product: id});
    this.setState({product_name: name});
    this.setState({product_type: type});
    this.setState({price: price});
    this.setState({remain_amount: remain});
    this.setState({product_image: img});
    this.setState({product_describe: desc});
    this.setState({modal: !this.state.modal});
  }

  redirectCreate = () => {
    window.location.href = "/seller/create_product"
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
    console.log(this.state)
    const cookies = new Cookies();
    const {id_product,price, product_describe, product_name, product_image, product_type, remain_amount}=this.state;
    fetch(serverAddress + "api/product/update", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        id_product: id_product,
        price: price,
        product_name:product_name,
        product_describe: product_describe,
        product_type: product_type,
        remain_amount:remain_amount,
        product_image: product_image,
    }),
    })
    .then((res) => res.json())
    .then((data) => {
        window.location.reload()
    });
}


  componentDidMount(){
    const cookies = new Cookies();
    fetch(serverAddress + "/api/product/id_seller/"+ cookies.get('id_user').toString(), {
        method: "get",
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((data) => {
        this.setState({product_details:data})
    }); 
  }

  render() {
    const {shop_details}=this.state
    return (
      <div>
        <div className="my-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="order-title">
                            Danh sách sản phẩm
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                    <Table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tên sản phẩm</th>
                          <th>Giá</th>
                          <th>Còn lại</th>
                          <th>Loại sản phẩm</th>
                          <th>Đánh giá</th>
                          <th>Quản lý</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                            this.state.product_details.map((product, index) => (
                              <tr>
                                <th scope="row">{index+1}</th>
                                <td>{product.product_name}</td>
                                <td>{product.price}</td>
                                <td>{product.remain_amount}</td>
                                <td>
                                  {product.product_type}
                                </td>
                                <td>{product.rating}</td>
                                <td><ButtonToggle onClick={() => this.openModal(product.id_product,product.product_name,product.product_type, product.price, product.remain_amount, product.product_image, product.product_describe)} color="primary">Chỉnh sửa sản phẩm</ButtonToggle>{' '}</td>
                              </tr>
                            ))
                        }
                      </tbody>
                    </Table>
                    </div>
                </div>
                <div className="">
                <ButtonToggle onClick={this.redirectCreate} color="primary">Thêm sản phẩm</ButtonToggle>{' '}
                
                <Modal isOpen={this.state.modal}>
                    <ModalHeader >Chỉnh sửa</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="product_name">Tên sản phẩm</Label>
                            <Input
                            type="text"
                            name="product_name"
                            id="product_name"
                            value = {this.state.product_name}
                            onChange = {this.changeProductName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_type">Loại sản phẩm</Label>
                            <Input type="select" name="product_type" id="product_type" onChange = {this.changeProductType}
                            value = {this.state.product_type}>
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
                            value = {this.state.price}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="remain_amount">Số lượng sản phẩm</Label>
                            <Input
                            type="number"
                            name="remain_amount"
                            id="remain_amount"
                            onChange = {this.changeRemainAmount}
                            value = {this.state.remain_amount}
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
                            value = {this.state.product_image}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_describe">Mô tả sản phẩm </Label>
                            <Input type="textarea" name="product_describe" id="product_describe" onChange = {this.changeProductDescribe}  value = {this.state.product_describe}/>
                        </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.changeMethod}>Lưu</Button>{' '}
                    <Button color="secondary" onClick={this.openModal}>Hủy</Button>
                    </ModalFooter>
                </Modal>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default ManageProduct;
