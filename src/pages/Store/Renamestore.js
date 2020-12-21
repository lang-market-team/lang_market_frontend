import React, { Component } from "react";
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Renamestore extends Component {
  render() {
    return (
      <div className="container">
        <Alert color="primary">
          Đổi tên gian hàng của bạn!
        </Alert>
        <Form>
          <FormGroup>
            <Label for="newName">Name</Label>
            <Input type="text" name="email" id="name" placeholder="Tên mới" />
          </FormGroup>
          <Button>Xác nhận</Button>
        </Form>
      </div>
    );
  }
}
export default Renamestore;
