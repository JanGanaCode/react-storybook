import React, { Component } from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.a``;
const ButtonInner = styled.button`
  min-width: 125px;
  font-size: 1.1em;
  font-weight: 400;
  letter-spacing: 1.7px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 45px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
  box-shadow: 0 4px 10px 0 rgba(49, 196, 190, 0.75);
  transition: all .4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    transition: all .4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

class Button extends Component {
  render() {
    return (
      <ButtonWrapper href={this.props.buttonLink}>
        <ButtonInner>
          {this.props.buttonName}
        </ButtonInner>
      </ButtonWrapper>
    )
  }
}

export default Button;
