import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./ScrollBarTest.css";
import { Link } from "react-scroll";
import { LeftArrow, RightArrow } from "../Icons_Final/Icon";

const list = [
  { id: 1, name: "Most Loved" },
  { id: 2, name: "Combo" },
  { id: 3, name: "All Day Breakfast" },
  { id: 4, name: "Lunch/Dinner" },
  { id: 5, name: "Juices" },
  { id: 6, name: "Fruit Bowls" },
  { id: 7, name: "Salads" },
  { id: 8, name: "SandWiches" },
  // { id: 9, name: "Smoothies" },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text }) => {
  return <div className="menu-item">{text}</div>;
};
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el, i) => {
    const { id, name } = el;

    return (
      <Link
        activeClass="active"
        to={name.split(" ").join("").toLowerCase()}
        spy={true}
        smooth={true}
        offset={-125}
        duration={500}
        key={i}
      >
        <MenuItem text={name} selected={selected} />
      </Link>
    );
  });

const ArrowLeft = <LeftArrow />;
const ArrowRight = <RightArrow />;

const ScrollBar = () => {
  const [selected, setSelected] = useState({
    selected: "Most Loved",
    translate: 0,
  });

  const onSelect = (key) => {
    console.log(key);
    setSelected({ selected: key });
  };

  // const selected1 = selected.selected.toString();
  // console.log(selected);
  const menu = Menu(list.slice(0, list.length), selected.selected);
  // console.log(menu);

  return (
    <ScrollMenu
      data={menu}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      wheel={false}
      alignCenter={false}
      selected={selected.selected}
      onSelect={onSelect}
      scrollToSelected={true}
      hideArrows={false}
      scrollBy={0}
    />
  );
};

export default ScrollBar;
