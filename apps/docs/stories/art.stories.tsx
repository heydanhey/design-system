import React from 'react';
import { BluePotion, Compass, Heart, Map } from "@heydan/art";

const options = {
  title: 'Art',
};

export default options;

export const Default = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <BluePotion width={100} height={100} />
      <Compass width={100} height={100}/>
      <Heart width={100} height={100} />
      <Map width={100} height={100} />
    </div>
  );
};
