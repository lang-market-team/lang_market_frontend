import React, { Component } from 'react';

import { ButtonToggle, Button, Form, FormGroup, Label, Input,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cookies from 'universal-cookie';
import serverAddress from "../../serverConnection";

class ManageStore extends Component {

  constructor(props) {
    const cookies = new Cookies()
    super(props);
    this.state = {
      shop_details : [],
      modal:false,
      shop_name: cookies.get('shop_name'),
      shop_describe: cookies.get('shop_describe'),
    };
  }

  openModal = () => {
    this.setState({modal: !this.state.modal});
  }

  changeName = (event) => {
    this.setState({shop_name: event.target.value})
  }

  changeDescription = (event) => {
    this.setState({shop_describe: event.target.value})
  }

  changeMethod = () => {
    const cookies = new Cookies();
    const {shop_name, shop_describe}=this.state;
    console.log(shop_name);
    console.log(shop_describe);
    console.log(cookies.get('id_user').toString())
    fetch(serverAddress + "api/shop/update", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_user: cookies.get('id_user').toString(),
        shop_name: shop_name,
        shop_describe: shop_describe,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload()
      });
  }

  componentDidMount(){
    const cookies = new Cookies();
    fetch(serverAddress + "api/shop/get/id_user=" +   cookies.get('id_user').toString(), {
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
                            Gian hàng của bạn
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                      <p>Tên cửa hàng: <strong>{shop_details.shop_name}</strong></p>
                      <p>Mô tả: {shop_details.shop_describe}</p>
                    </div>
                </div>
                <div className="">
                <ButtonToggle onClick={this.openModal} color="primary">Chỉnh sửa</ButtonToggle>{' '}
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
                            value = {this.state.shop_name}
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
                            value = {this.state.shop_describe}
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
export default ManageStore;
