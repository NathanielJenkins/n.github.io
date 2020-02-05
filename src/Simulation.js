import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import sim from "./img/simulation.svg";
import delay from "./img/delay.png";
import model from "./img/model.png";

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
    &.display-4 {
      color: darkslategrey;
    }
  }

  .panel.green {
    background-color: darkseagreen;
  }
  .panel.lavender {
    background-color: lavender;
  }
  .img-container {
  }
  h3,
  h4 {
    color: cadetblue;
  }
  p {
    color: darkslategrey;
  }
`;

const LyricClassifier = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene triggerHook="onLeave" duration={800} pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel green">
            <span className="display-3">Simulation</span>
            <div className="img-container">
              <img className="p-4 img-fluid" src={sim}></img>
            </div>
          </section>
          <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
            <section className="panel lavender">
              <span className="display-4">
                Priority Queueing to Alleviate Packet Re-ordering Problem
              </span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <div className="light_mode">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-4">
            <h3>Overview</h3>
            <p>
              This project investigates the extent that the inclusion of a
              priority queue in an intermediary router helps mitigate the
              problem of packets reordering from the source to the destination
              in a system.
            </p>
            <div className="btn-group btn-block">
              <a
                href="https://github.com/NathanielJenkins/SimulationProject/blob/master/Report%20Project.pdf"
                type="button"
                class="btn btn-outline-dark"
                target="_blank"
              >
                Project Report
              </a>
              <a
                href="https://github.com/NathanielJenkins/SimulationProject"
                type="button"
                class="btn btn-outline-dark"
                target="_blank"
              >
                Github Source
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <img className="img-fluid rounded shadow border" src={delay}></img>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <img className="img-fluid" src={model}></img>
          </div>
          <div className="col-md-6">
            <h4>Description</h4>
            <p>
              The two simulation models were evaluated with the following
              specification and details.
            </p>
            <h6>System 1 Packet Ordering</h6>
            <p>
              System 1 Packet Ordering: The system uses two queues marked high
              and low. An incoming packet is marked as inorder if the router
              current sequence number is less than the incoming packet sequence
              and placed into the low priority queue. The incoming packet is
              marked as out of order if the router current sequence number is
              greater than the incoming packet and placed into the high queue.
              The packets are ordered within the respective queues according to
              a FIFO.
            </p>
            <h6>System 2 Packet Ordering</h6>
            <p>
              An incoming packet will be placed into the single queue and will
              be served according to a FIFO strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionWipes2Styled>
);

export default LyricClassifier;
