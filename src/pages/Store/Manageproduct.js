import React, { Component } from "react";
import { Table, ButtonToggle } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
class Manageproduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };

    }

    openModal = () => {
        this.setState({modal: !this.state.modal});
      }

    render() {
        return (
        <div className="container text-center">
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Còn lại</th>
                    <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Macbook</td>
                    <td>1000000</td>
                    <td>5</td>
                    <td>
                        <ButtonToggle onClick={this.openModal} color="success">Chỉnh sửa</ButtonToggle>{' '}
                        <ButtonToggle color="danger">Xóa</ButtonToggle>{' '}
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Applewatch</td>
                    <td>100000</td>
                    <td>50</td>
                    <td>
                        <ButtonToggle onClick={this.openModal} color="success">Chỉnh sửa</ButtonToggle>{' '}
                        <ButtonToggle color="danger">Xóa</ButtonToggle>{' '}
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Air pod</td>
                    <td>10000</td>
                    <td>8</td>
                    <td>
                        <ButtonToggle onClick={this.openModal} color="success">Chỉnh sửa</ButtonToggle>{' '}
                        <ButtonToggle color="danger">Xóa</ButtonToggle>{' '}
                    </td>
                    </tr>
                </tbody>
                </Table>
                <ButtonToggle onClick={this.openModal} color="primary">Thêm sản phẩm</ButtonToggle>{' '}
                <Modal isOpen={this.state.modal}>
                    <ModalHeader >Thêm sản phẩm</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="product_name">Tên sản phẩm</Label>
                            <Input
                            type="text"
                            name="product_name"
                            id="product_name"
                            placeholder="Ex: Macbook"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="remain_amount">Số lượng sản phẩm</Label>
                            <Input
                            type="number"
                            name="remain_amount"
                            id="remain_amount"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_image">Hình ảnh</Label>
                            <Input
                            type="url"
                            name="product_name"
                            id="product_name"
                            placeholder="URL"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_describe">Mô tả sản phẩm </Label>
                            <Input type="textarea" name="product_describe" id="product_describe" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_comment">Bình luận về sản phẩm </Label>
                            <Input type="textarea" name="product_comment" id="product_comment" />
                        </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.openModal}>Lưu</Button>{' '}
                    <Button color="secondary" onClick={this.openModal}>Hủy</Button>
                    </ModalFooter>
                </Modal>
        </div>
        );
    }
}
export default Manageproduct;
