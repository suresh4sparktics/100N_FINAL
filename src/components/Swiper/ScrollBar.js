/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./ScrollBar.css";

export default function ScrollerHeader() {
  useEffect(() => {
    const slider = document.querySelector(".menu-wrapper");
    const lists = document.querySelectorAll(".menu-item");
    console.log(lists);
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      // console.log(walk);
    });
    window.addEventListener("scroll", () => {
      var activeElement = document.querySelector(".active");
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "center",
        });
      }
    });
    lists.forEach((list) => {
      list.addEventListener("click", () => {
        list.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "center",
        });
      });
    });
    return () => console.log("unmounting...");
  });

  return (
    <>
      <div className="navbar-fixed-top menu-wrapper">
        <div className="menu-item">
          <Link
            className="test"
            to="mostloved"
            spy={true}
            smooth={true}
            duration={500}
            offset={-125}
          >
            Most Loved
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="combo"
            spy={true}
            smooth={true}
            duration={500}
          >
            Combo
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="alldaybreakfast"
            spy={true}
            smooth={true}
            duration={500}
          >
            All Day Breakfast
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="lunch/dinner"
            spy={true}
            smooth={true}
            duration={500}
          >
            Lunch/Dinner
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="juices"
            spy={true}
            smooth={true}
            duration={500}
          >
            Juices
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="fruitbowls"
            spy={true}
            smooth={true}
            duration={500}
          >
            Fruit Bowls
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="salads"
            spy={true}
            smooth={true}
            duration={500}
          >
            Salads
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className="test"
            to="sandwiches"
            spy={true}
            smooth={true}
            duration={500}
          >
            SandWiches
          </Link>
        </div>
      </div>
    </>
  );
}
