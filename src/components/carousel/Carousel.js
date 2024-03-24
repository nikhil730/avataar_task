import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Carousel.css";

const Carousel = ({ images, images_content }) => {
  const [imgs, setImgs] = useState(images);
  const [ishover, setIshover] = useState(false);

  const [SelectedImg, setSelectedImg] = useState((images.length - 1) / 2);
  // console.log(items);
  const OnHover = () => {
    setIshover(true);
  };
  const OffHover = () => {
    setIshover(false);
  };

  const Slideleft = () => {
    const newImgs = [...imgs];

    const lastImg = newImgs.pop();
    newImgs.unshift(lastImg);

    setImgs(newImgs);
    setSelectedImg((Img) => (Img - 1 + 5) % 5);
  };

  const Slideright = () => {
    const newImgs = [...imgs];
    console.log(newImgs);
    const firstImg = newImgs.shift();
    console.log(firstImg);
    newImgs.push(firstImg);

    setImgs(newImgs);
    console.log(SelectedImg);
    setSelectedImg((Img) => (Img + 1) % 5);
    console.log(SelectedImg);
  };

  return (
    <div style={{ gridRowStart: "4", gridRowEnd: "16", display: "grid" }}>
      {/* Images */}
      <div style={{ gridRowStart: "1", gridRowEnd: "5" }}>
        <div
          className="gallery-container"
          // style={{
          //   alignItems: "center",
          //   display: "flex",
          //   height: "100%",
          //   margin: "0 auto",
          //   width: "100%",
          //   position: "relative",
          //   overflow: "hidden",
          // }}
        >
          {imgs.map((item, index) =>
            index + 1 == 3 ? (
              <img
                className={`gallery-item gallery-item-${index + 1}`}
                src={item}
                alt="#"
                onMouseOver={OnHover}
                onMouseOut={OffHover}
              />
            ) : (
              <img
                className={`gallery-item gallery-item-${index + 1}`}
                src={item}
                alt="#"
              />
            )
          )}
          <div
            className={`${ishover ? "img_text" : "hide_text"}`}
            onMouseOver={OnHover}
            onMouseOut={OffHover}
          >
            {images_content[SelectedImg]}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div
        className="gallery-controls"
        // style={{
        //   gridRowStart: "5",
        //   gridRowEnd: "6",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <img
            src={leftArrow}
            alt="#"
            onClick={Slideleft}
            style={{ cursor: "pointer" }}
          />
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`dots ${SelectedImg === index ? "active-dots" : ""}`}
              ></div>
            ))}
          </div>
          <img
            src={rightArrow}
            alt="#"
            onClick={Slideright}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
