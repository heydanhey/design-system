import React, { useState } from 'react';
import styled from 'styled-components';

export interface PixelProps {
  size?: number;
  hoverColor?: string;
  clickedColor?: string;
  color?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

const StyledPixel = styled.button<PixelProps>`
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

export function Pixel(props: PixelProps) {
  const [isActive, setIsActive] = useState(props.isActive || false);

  const handleClick = (e: any) => {
    if (e.type === 'mousedown') {
      setIsActive(!isActive);
      return;
    }

    if (e.type === 'mouseover' && e.buttons) {
      setIsActive(true);
    }
  }

  return (
    <StyledPixel
      onMouseDown={handleClick}
      onMouseOver={handleClick}
      isActive={isActive}
      {...props}
    >
      {props.children}
    </StyledPixel>
  );
}

Pixel.displayName = 'Pixel';
