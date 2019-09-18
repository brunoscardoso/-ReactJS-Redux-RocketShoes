import React from 'react';

import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  console.log(cartSize);
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Rocketshoes" />
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
