import * as React from "react";
import styled from 'styled-components';

const StyledButton = styled
  .button
  .attrs(props => ({
    type: props.type || 'button',
  }))
  `
    background-color: transparent;
    padding: 10px;
    border-width: 5px;
    border-color: blue;
    border-radius: 5px;
    transition: all 200ms ease-in-out;
    aspect-ratio: 1 / 1;

    :hover {
      background-color: white;
      opacity: 0.5;
    }
  `;

export interface ButtonProps {
  children: React.ReactNode;
}
export function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.displayName = "Button";
