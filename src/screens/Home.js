import React from "react";
import Carousel from "../components/carousel/Carousel";
import img1 from "../assets/caraimg1.png";
import img2 from "../assets/caraimg2.png";
import img3 from "../assets/caraimg3.png";
import img4 from "../assets/caraimg4.png";
import img5 from "../assets/caraimg5.png";

const Home = () => {
  const images = [img4, img5, img1, img2, img3];
  const images_content = [
    "Flowers",
    "Abstract art 1",
    "Modern kitchen utensils",
    "Abstract art 2",
    "Flower pots",
  ];
  return (
    <div
      style={{
        height: "calc(100vh - 10vh)",
        display: "grid",
        fontFamily: '"Lato", sans-serif',
        fontWeight: "700",
        fontStyle: "normal",
      }}
    >
      <h1
        style={{
          gridRowStart: "1",
          gridRowEnd: "3",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Featured Products
      </h1>
      <p
        style={{
          gridRowStart: "3",
          gridRowEnd: "4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        Explore and discover a variety of products
      </p>
      <Carousel images={images} images_content={images_content} />
    </div>
  );
};

export default Home;
