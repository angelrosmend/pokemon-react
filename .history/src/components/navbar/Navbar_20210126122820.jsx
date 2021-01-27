import React, { useContext, useState } from 'react';
import './navbar.css'
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
  NavbarText
} from 'reactstrap';
import { logoPokedex } from '../../assets/img';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';

function Header(props){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {selectEs, selectEn, selectDe} = useContext(PokemonContext)

  return (
      <Navbar className='shadow' color="light" light expand="md">
        <NavbarBrand href="/"><img className='logo' src={logoPokedex}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5" navbar>
            <NavItem>
              <Link to='/favorites' className='nav-link'>Favorites</Link>
            </NavItem>
            <NavItem>
              <Link to='/myteam' className='nav-link'>My team</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Lenguaje
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={selectEs}>
                 Español
                </DropdownItem>
                <DropdownItem onClick=>
                  English
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Deutsch
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;