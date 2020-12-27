import React, { Component } from 'react';

import { ButtonToggle, Button, Form, FormGroup, Label, Input,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cookies from 'universal-cookie';
import serverAddress from "../../serverConnection";

class ManageProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shop_details : [],
      modal:false,
      redirect: false,
    };
  }

  

  openModal = () => {
    this.setState({modal: !this.state.modal});
  }

  redirectCreate = () => {
    window.location.href = "/seller/create_product"
  }


  // changeMethod = () => {
  //   const cookies = new Cookies();
  //   const {shop_name, shop_describe}=this.state;
  //   console.log(shop_name);
  //   console.log(shop_describe);
  //   console.log(cookies.get('id_user').toString())
  //   fetch(serverAddress + "api/shop/get/id_user="+ cookies.get('id_user').toString(), {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       id_user: cookies.get('id_user').toString(),
  //       shop_name: shop_name,
  //       shop_describe: shop_describe,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  componentDidMount(){
    const cookies = new Cookies();
    fetch(serverAddress + "api/shop/get/id_user="+ cookies.get('id_user').toString(), {
        method: "get",
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((data) => {
        this.setState({shop_details:data})
        console.log(this.state.shop_details)
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
                      <p>Tên cửa hàng: <strong>{shop_details.shop_name}</strong></p>
                      <p>Mô tả: {shop_details.shop_describe}</p>
                    </div>
                </div>
                <div className="">
                <ButtonToggle onClick={this.redirectCreate} color="primary">Thêm sản phẩm</ButtonToggle>{' '}
                <ButtonToggle onClick={this.openModal} color="primary">Chỉnh sửa sản phẩm</ButtonToggle>{' '}
                <Modal isOpen={this.state.modal}>
                    <ModalHeader >Chỉnh sửa</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="shop_name">Tên mới</Label>
                            <Input
                            type="text"
                            name="shop_name"
                            id="shop_name"
                            placeholder="Nhập tên gian hàng"
                            onChange={this.changeName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="shop_describe">Mô tả mới</Label>
                            <Input
                            type="text"
                            name="shop_describe"
                            id="shop_describe"
                            placeholder="Nhập mô tả"
                            onChange={this.changeDescription}
                            />
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
