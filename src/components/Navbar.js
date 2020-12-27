import React,{ Component }  from "react";
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
import Logo from "../images/smallLogoLangMarket.png";
import Cookies from 'universal-cookie';

class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isGuest: true,
      isAdmin: true,
      isSeller:true,
      isBuyer:true
    };
  }
  // const [isOpen, setIsOpen] = useState(false);

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  
  componentDidMount() {
    const cookies = new Cookies();
    if(cookies.get('type_account') === '3'){ // Buyer
      this.setState({isGuest: false})
      this.setState({isAdmin: false})
      this.setState({isSeller: false})
      this.setState({isBuyer: true})
    }
    else if(cookies.get('type_account') === '2'){
      this.setState({isGuest: false})
      this.setState({isAdmin: false})
      this.setState({isSeller: true})
      this.setState({isBuyer: false})
    }
    else if(cookies.get('type_account') === '1'){
      this.setState({isGuest: false})
      this.setState({isAdmin: true})
      this.setState({isSeller: false})
      this.setState({isBuyer: false})
    }
    else{
      this.setState({isGuest: true})
      this.setState({isAdmin: false})
      this.setState({isSeller: false})
      this.setState({isBuyer: false})
    }
  }
    
  render(){
  return (
    <div>
      <Navbar color="info" light expand="sm">
        <NavbarBrand href="/">
          <img src={Logo} alt="Logo" width="50px" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { this.state.isGuest?
              <NavItem>
              <NavLink href="/login">Đăng nhập</NavLink>
            </NavItem>:""
            }
            {
              this.state.isGuest? 
            <NavItem>
              <NavLink href="/signup">Đăng ký</NavLink>
            </NavItem>:""
            }
            {
            this.state.isGuest || this.state.isBuyer?
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Danh mục sản phẩm
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/categorie/1">Thời trang</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/categorie/2">Thực phẩm</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/categorie/3">Đồ điện tử</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/categorie/4">Sách</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/categorie/5">Chăm sóc da</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>:""}
            {
              this.state.isAdmin? 
            <NavItem>
              <NavLink href="/admin/manage_account">Quản lý tài khoản</NavLink>
            </NavItem>:""
            }
            {
              this.state.isAdmin? 
            <NavItem>
              <NavLink href="/admin/manage_fee">Quản lý phí nền tảng</NavLink>
            </NavItem>:""
            }
            {
              this.state.isSeller? 
            <NavItem>
              <NavLink href="/seller/manage_store">Quản lý cửa hàng</NavLink>
            </NavItem>:""
            }
            {
              this.state.isSeller? 
            <NavItem>
              <NavLink href="/seller/manage_product">Quản lý sản phẩm</NavLink>
            </NavItem>:""
            }
            {
              this.state.isSeller? 
            <NavItem>
              <NavLink href="/seller/submit_fee">Nộp phí nền tảng</NavLink>
            </NavItem>:""
            }
             {this.state.isSeller?
              <NavItem>
              <NavLink href="/order/myorder">My Order</NavLink>
            </NavItem>:""
            }
            {/* <UncontrolledDropdown nav inNavbar>
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
            </UncontrolledDropdown> */}
            {this.state.isBuyer?
              <NavItem>
              <NavLink href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </NavLink>
            </NavItem>:""
            }
            {this.state.isBuyer?
              <NavItem>
              <NavLink href="/order/myorder">My Order</NavLink>
            </NavItem>:""
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default NavbarComponent;