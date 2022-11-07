import React from 'react';
import styled from 'styled-components';

export interface ControlledPixelProps {
  size?: number;
  hoverColor?: string;
  clickedColor?: string;
  color?: string;
  isActive?: boolean;
  children?: React.ReactNode;
  onMouseOver?: any;
  onMouseDown?: any;
}

const StyledPixel = styled.button<ControlledPixelProps>`
  width: ${props => props.size || 100}px;
  height: ${props => props.size || 100}px;
  :hover {
    background-color: ${props => props.isActive ? 'darkgrey' : props.hoverColor || 'lightgrey'};
  }
  padding: 0px;
  border-width: 0px;
  border-style: none;
  background-color: ${props => props.isActive ? props.color || 'black' : props.color || 'transparent'}
`;

export function ControlledPixel(props: ControlledPixelProps) {

  return (
    <StyledPixel
      isActive={props.isActive}
      {...props}
    >
      {props.children}
    </StyledPixel>
  );
}

ControlledPixel.displayName = 'ControlledPixel';
