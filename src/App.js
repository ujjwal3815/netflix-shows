import React from 'react';
import './style.css';
import Card from './Card';
import Sdata from './Sdata';

const App = () => {
  return (
    <>
      <h1 className="heading_style"> List of Top 6 Netflix Series in 2021 </h1>

      {Sdata.map(val => {
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default App;
