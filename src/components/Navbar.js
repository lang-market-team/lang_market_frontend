import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Logo from "../images/smallLogoLangMarket.png"

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" light expand="sm">
        <NavbarBrand href="/">
          <img src={Logo} alt="Logo" width="50px" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/login">Đăng nhập</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Đăng ký</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Danh mục sản phẩm
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/productlist/fashion">Thời trang</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/productlist/food">Thực phẩm</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/productlist/electronicdevice">Đồ điện tử</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/productlist/book">Sách</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/productlist/skincare">Chăm sóc da</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Store
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/store/rename">Đổi tên</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/store/manage">Quản lý</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;