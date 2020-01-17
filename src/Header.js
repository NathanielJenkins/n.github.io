import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import code from "./img/code.svg";

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: inherit;
    width: inherit;
    position: absolute;
    text-align: center;
  }
  .panel span {
    top: calc(50% - 80px);
    color: white;

    position: relative;
    display: block;

    &.display-1 {
      font-weight: 100;
      letter-spacing: 5px;
    }
    &.display-3 {
      font-weight: 200;
    }
  }

  .panel.blue {
    background: #141e30; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #243b55,
      #141e30
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #243b55,
      #141e30
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.orange {
    background-color: orange;
  }

  .thin {
    font-weight: 200;
    font-size: 40px;
  }
`;

const Header = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene triggerHook="onLeave" duration={800} pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel blue">
            <span className="display-1">Hello.</span>

            <span>
              <p className="lead">Nathan Jenkins</p>
            </span>
          </section>
          <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
            <section className="panel turqoise">
              <span className="display-3">My Projects</span>
              <span className="display-4 thin">
                <a target="_blank" href="https://github.com/NathanielJenkins/">
                  Github
                </a>
              </span>
              <div className="container">
                <img className="p-4 img-fluid" src={code}></img>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel orange">
              <span className="display-3">Course Map</span>
              <span className="display-4 thin">
                Builds a tree of pre reqs for a given course
              </span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default Header;
