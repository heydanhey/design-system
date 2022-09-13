import React from 'react';
import { Pixel } from "@heydan/core";

const options = {
  title: 'Pixel',
};

export default options;

export const Default = () => {
  return (
    Array(8).fill(0).map((m, i) => (
      <div style={{display: 'flex'}} key={i}>
        {Array(8).fill(0).map((m, i) => <Pixel key={i} />)}
      </div>
    ))
  )
};
