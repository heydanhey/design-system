import React from 'react';
import { Compass, Heart } from "@heydan/art";

const options = {
  title: 'Art',
};

export default options;

export const Default = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <Compass width={100} height={100}/>
      <Heart width={100} height={100} />
    </div>
  );
};
