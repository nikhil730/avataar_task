import { useState, useEffect, useRef } from "react";
import logo from "../../assets/Intersect.png";
import searchIcon from "../../assets/Vector.png";
import downIcon from "../../assets/chevron-down.png";
import "./Nav.css";

const NavMenu = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(items);
  const [hiddenItems, setHiddenItems] = useState([]);

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };

  const updateMenuItems = () => {
    const screenWidth = window.innerWidth;
    let visItems = items;
    let extraItems = items;

    if (screenWidth < 640) {
      visItems = items.slice(0, 0);
      extraItems = items.slice(0);
    } else if (screenWidth < 750) {
      visItems = items.slice(0, 1);
      extraItems = items.slice(1);
    } else if (screenWidth < 780) {
      visItems = items.slice(0, 2);
      extraItems = items.slice(2);
    } else if (screenWidth < 850) {
      visItems = items.slice(0, 3);
      extraItems = items.slice(3);
    } else if (screenWidth < 1000) {
      visItems = items.slice(0, 4);
      extraItems = items.slice(4);
    } else if (screenWidth < 1100) {
      visItems = items.slice(0, 5);
      extraItems = items.slice(5);
    } else if (screenWidth < 1240) {
      visItems = items.slice(0, 6);
      extraItems = items.slice(6);
    } else {
      visItems = items.slice(0, 7);
      extraItems = items.slice(7);
    }
    setVisibleItems(visItems);
    setHiddenItems(extraItems);
  };

  useEffect(() => {
    updateMenuItems();

    window.addEventListener("resize", updateMenuItems);

    return () => {
      window.removeEventListener("resize", updateMenuItems);
    };
  }, []);

  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="#" />
        <span className="heading">E-COMM</span>
      </div>

      <ul className="center">
        {visibleItems.map((item, index) => (
          <li
            style={{ fontSize: "1rem" }}
            key={index}
            className="visible_items"
          >
            {item}
          </li>
        ))}

        {hiddenItems.length > 0 && (
          <li
            style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}
            className="hidden_items"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>MORE</span>
              <img
                src={downIcon}
                alt="#"
                style={{ cursor: "pointer" }}
                onClick={toggleOpen}
              />
            </div>
            <ul
              style={{
                display: open ? "block" : "none",
              }}
              className="hidden_items_container"
            >
              {hiddenItems.map((item, index) => (
                <li
                  style={{ padding: "1rem" }}
                  key={index}
                  className="single_hidden_item"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>

      <div className="right">
        <img src={searchIcon} alt="#" />
        <input placeholder="Search Something" className="heavyPlaceholder" />
      </div>
    </header>
  );
};

export default NavMenu;
