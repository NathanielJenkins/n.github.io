import React from "react";
import { Tween } from "react-gsap";
import styled from "styled-components";
import treepng from "../img/tree.png";
const StaticTop = styled.div`
  width: 100vw;
  position: relative;
`;

const coursemap = {
  jsx: {
    animation: <div></div>,

    static_top: (
      <StaticTop>
        <div className="container dark_mode">
          <img className="mx-auto" height="300px" src={treepng}></img>
        </div>
      </StaticTop>
    )
  },

  text: {
    title: "Course Map",
    header: `Builds a tree of pre reqs for a given course`,
    subtitle: `
         This web app gives you a tree of the prerequisites required to take a given course at UVIC. 
         It continues to build the tree downward until it reaches a course with no required pre-reqs`,
    link: "https://github.com/NathanielJenkins/Course_Map",
    author: "Jenkins"
  },
  length: 1
};

export default coursemap;
