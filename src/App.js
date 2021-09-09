import React from 'react';
import './style.css';
import Card from './Card';

const App = () => {
  return (
    <>
      <h1 className="heading_style"> List of Top 6 Netflix Series in 2021 </h1>

      <Card
        imgsrc="https://rukminim1.flixcart.com/image/416/416/k0flmkw0/poster/2/4/w/medium-death-note-light-and-ryuk-poster-size-a3-12-x-18-inchs-original-imafk84kxfjwbaf9.jpeg?q=70"
        title="A Netflix Original"
        sname="Death Note"
        link="https://www.youtube.com/watch?v=WsiWrr8uZGo"
      />

      <Card
        imgsrc="https://thewildcattribune.com/wp-content/uploads/2020/05/49931927143_f96e656dab_o-900x900.jpg"
        title="A Netflix Original"
        sname="Never Have I Ever"
        link="https://www.youtube.com/watch?v=HyOCCCbxwMQ"
      />

      <Card
        imgsrc="https://m.media-amazon.com/images/I/71OB1IywjLL._AC_SY679_.jpg"
        title="A Netflix Original"
        sname="Stranger Things"
        link="https://www.youtube.com/watch?v=b9EkMc79ZSU"
      />

      <Card
        imgsrc="http://images6.fanpop.com/image/photos/40500000/Season-2-Promotional-Poster-schitts-creek-40573555-960-1440.jpg"
        title="A Netflix Original"
        sname="Schitt's Creek"
        link="https://www.youtube.com/watch?v=W0uWS6CnC2o"
      />

      <Card
        imgsrc="https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_f3ca06f4-0ea3-4795-818a-b680979e8073.jpg?v=1589268519"
        title="A Netflix Original"
        sname="Money Heist"
        link="https://www.youtube.com/watch?v=htqXL94Rza4"
      />

      <Card
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="A Netflix Original"
        sname="Dark"
        link="https://www.youtube.com/watch?v=rrwycJ08PSA"
      />
    </>
  );
};

export default App;
