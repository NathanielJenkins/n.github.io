import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ml from "./img/ml.svg";
import heatmap from "./img/heatmap.png";

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

  .panel.green {
    background-color: Teal;
  }
  .panel.salmon {
    background-color: salmon;
  }
  .img-container {
  }
  h3,
  h4 {
    color: salmon;
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
            <span className="display-3">Machine Learning</span>
            <div className="img-container">
              <img className="p-4 img-fluid" src={ml}></img>
            </div>
          </section>
          <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
            <section className="panel salmon">
              <span className="display-4">Genre Classification By Lyrics</span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <div className="light_mode">
      <div className="container">
        <div className="row p-4">
          <div className="col-4">
            <h3>Overview</h3>
            <p>
              This report serves to identify if there exists a link between the
              lyrics of a song and genre that the song belongs to. The notebook
              will analyses the effectiveness of different machine learning
              techniques, algorithms and natural language processing tools to
              determine the correlation between lyrics and musical genres.
            </p>
            <div className="btn-group btn-block">
              <a
                href="https://github.com/NathanielJenkins/LyricGenreClassifier/blob/final/project.ipynb"
                type="button"
                class="btn btn-outline-dark"
                target="_blank"
              >
                Jupyter Notebook
              </a>
              <a
                href="https://github.com/NathanielJenkins/LyricGenreClassifier"
                type="button"
                class="btn btn-outline-dark"
                target="_blank"
              >
                Github Source
              </a>
            </div>
          </div>
          <div className="col-8">
            <img className="img-fluid rounded shadow-lg" src={heatmap}></img>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-8">
            <h4>Introduction</h4>
            <p>
              Online streaming platforms like Apple Music and Spotify add new
              songs to their collection daily. Each platform gives users the
              ability to listen to and download millions unique of songs. These
              songs are catalogued and categorized so that music listeners may
              find new songs that match their unique tastes. Organizing songs by
              genre is an old and familiar technique to categorize music and
              make it easier for listeners to find songs they like. To classify
              songs into genres manually, someone would need to listen to it and
              select the genre that best applies. This is hard and very
              time-consuming job. They would require a knowledge of many
              different genres, types of music and the nuances between them.
              Machine learning and text lyric analysis can aid in this pursuit.
            </p>
          </div>
          <div className="col-4">
            <h4>Future Improvements</h4>
            <p>
              Using actual music as input, in addtion to lyrics would be
              interesting to see how the algorithms improve. Futhermore, better
              defining what the boundaries of genres by subdividing songs into
              decades
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionWipes2Styled>
);

export default LyricClassifier;
