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
            <NavItem>
              <NavLink href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;