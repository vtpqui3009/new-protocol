import React from "react";
import styled from "styled-components";

const Style = styled.div`
  @keyframes flicker {
    0% {
      opacity: 1;
    }
    3% {
      opacity: 0.4;
    }
    6% {
      opacity: 1;
    }
    7% {
      opacity: 0.4;
    }
    8% {
      opacity: 1;
    }
    9% {
      opacity: 0.4;
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  #wrapper {
    z-index: 100;
    position: relative;
  }
  #wrapper span {
    font-size: 60px;
  }
  #wrapper #d {
    animation: flicker 6s infinite forwards;
  }
  #wrapper #t {
    animation: flicker 10s infinite forwards;
  }

  #wrapper #nk {
    animation: flicker 4s infinite forwards;
  }

  #wrapper {
    z-index: 100;
    position: relative;
  }

  #wrapper #d {
    animation: flicker 6s infinite forwards;
  }
  #wrapper #t {
    animation: flicker 10s infinite forwards;
  }

  #wrapper #nk {
    animation: flicker 4s infinite forwards;
  }
  .text1 {
    color: #f065fe;
    font-family: "Kenia", cursive;
  }
  .text2 {
    color: #3c4ad2;
    font-family: "Kenia", cursive;
  }
`;

const DaftPunk = () => (
  <Style>
    <div id="wrapper">
      <span id="d" className="text1">
        M
      </span>
      <span id="nk" className="text1">
        e
      </span>
      <span id="u" className="text1" style={{ marginRight: "10px" }}>
        ta
      </span>
      <span id="nk" className="text2">
        A
      </span>
      <span id="d" className="text2">
        du
      </span>
      <span id="t" className="text2">
        lt
      </span>
    </div>
  </Style>
);

export default DaftPunk;
