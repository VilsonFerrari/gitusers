import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Collapse, Input, InputGroup, InputGroupAddon, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { bindActionCreators } from 'redux';
import styled from 'styled-components'
import { searchFor } from '../actions/search_for';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateValue } from '../reducers/search_reducer';

type Props = {
  searchFor: (val: string) => void
}

const CustomNavbar = (props: any) => {
  let history = useHistory()

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const searchQuery = useAppSelector(state => state.search.value)
  const dispatch = useAppDispatch()
  
  const setValue = (el: ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateValue(el.target.value))
  }

  const search = () => {
    history.push('/')
    props.searchFor(searchQuery)
  }

  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand href="/" className="mr-auto">Git Users</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={collapsed} navbar>
        <div className="w-100 mx-md-3 pl-md-3 mt-3 mt-md-0">
          <InputGroup>
            <StyledInput placeholder="Write the Github username that you are searching for" value={searchQuery} onChange={setValue} />
            <InputGroupAddon addonType="prepend">
              <StyledButton onClick={search}>Search</StyledButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Link to="/history" className="text-center mt-3 mt-md-0">
          History
        </Link>
      </Collapse>
    </Navbar>
  );
}

const StyledInput = styled(Input)`
  border-radius: 30px;
`

const StyledButton = styled(Button)`
  border-top-right-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
`

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ searchFor }, dispatch)
export default connect(null, mapDispatchToProps)(CustomNavbar)
