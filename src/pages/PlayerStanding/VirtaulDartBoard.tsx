import React, { useEffect, useRef, useState } from "react";
import "./VirtualDartBoard.css";
import { DartPosition } from "./DartPosition";

export const VirtualDartBoard = (props) => {
  const hitt = "blue";
  const doubleGreen = "#00a000";
  const singleGreen = "#e7e4c7";
  const singleRed = "black";
  const doubleRed = "#ff0000";

  const currentWindowWidth = props.currenElementWidth;
  const schwarzerRand = currentWindowWidth * 0.12235649546827795;

  const calculateCoordsX = (coord) => {
    coord = coord - 60;

    if (coord > 680) {
      console.log("auserhalb");
    } else if (coord < 0) {
      console.log("auserhalb");
    } else {
      coord =
        (coord / (props.maxBEcoordsX - 120)) *
          currentWindowWidth *
          0.755287105 +
        schwarzerRand -
        10;
    }
    return coord;
  };
  const calculateCoordsY = (coord) => {
    coord = coord - 60;
    if (coord > 680) {
      console.log("auserhalb");
    } else if (coord < 0) {
      console.log("auserhalb");
    } else {
      coord =
        (coord / (props.maxBEcoordsY - 120)) *
          currentWindowWidth *
          0.755287105 +
        schwarzerRand -
        10;
    }
    return coord;
  };

  const multii = ["Test", "SO", "D", "T", "SB", "B"];

  const calculateInnOut = (multiplication, throwOrder, score) => {
    if (score == 25) {
      if (multiplication == 1) {
        return multii[4];
      }
      return multii[5];
    } else {
      if (multiplication == 1) {
        const mittelY = Math.abs(props.coordinates[throwOrder][1] - 400);
        const mittelX = Math.abs(props.coordinates[throwOrder][0] - 400);
        const erg = Math.sqrt(mittelX * mittelX + mittelY * mittelY);
        if (erg < 250) {
          return "SI";
        } else {
          return "SO";
        }
      }
      return multii[hit[throwOrder][1]];
    }
  };

  const makeScoreString = (dartThrow, testUndefined, testLength) => {
    if (testUndefined) {
      return null;
    } else {
      if (testLength) {
        return null;
      }
    }
    if (hit[dartThrow][0] == 25) {
      return calculateInnOut(hit[dartThrow][1], dartThrow, hit[dartThrow][0]);
    }
    return (
      calculateInnOut(hit[dartThrow][1], dartThrow, hit[dartThrow][0]) +
      hit[dartThrow][0]
    );
  };

  // Möglichkeinten: SI, SO, D, T, B, SB
  const hit = props.result;
  const zusammen = [
    makeScoreString(0, hit == undefined, false),
    makeScoreString(1, hit == undefined, hit.length < 2),
    makeScoreString(2, hit == undefined, hit.length < 3),
  ];

  const isHit = (field) => {
    for (let i = 0; i < zusammen.length; i++) {
      if (zusammen[i] == field) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      {props.coordinates != undefined && props.coordinates[0][0] != null && (
        <div
          className="dartPosition"
          style={{
            top: calculateCoordsX(props.coordinates[0][1]),
            left: calculateCoordsY(props.coordinates[0][0]),
          }}
        >
          <DartPosition />
        </div>
      )}
      {props.coordinates != undefined &&
        props.coordinates.length > 1 &&
        props.coordinates[1][0] != null && (
          <div
            className="dartPosition"
            style={{
              top: calculateCoordsX(props.coordinates[1][1]),
              left: calculateCoordsY(props.coordinates[1][0]),
            }}
          >
            <DartPosition />
          </div>
        )}
      {props.coordinates != undefined &&
        props.coordinates.length > 2 &&
        props.coordinates[2][0] != null && (
          <div
            className="dartPosition"
            style={{
              top: calculateCoordsX(props.coordinates[2][1]),
              left: calculateCoordsY(props.coordinates[2][0]),
            }}
          >
            <DartPosition />
          </div>
        )}

      <svg
        // width="auto"
        // height="auto"
        viewBox="0 0 455 455"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>dartboard</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="dartboard">
            <g id="Board" transform="translate(0.500000, 0.500000)">
              <g id="BaseBoard" fill="#000000">
                <path
                  d="M453.5,227 C453.5,352.092496 352.092496,453.5 227,453.5 C101.907504,453.5 0.5,352.092496 0.5,227 C0.5,101.907504 101.907504,0.5 227,0.5 C352.092496,0.5 453.5,101.907504 453.5,227 L453.5,227 Z"
                  id="path1307"
                ></path>
              </g>
              <g
                id="Inside-Spider"
                transform="translate(50.000000, 51.000000)"
                stroke="#D0EDFD"
              >
                <path
                  d="M347.55,176 C347.55,270.192164 271.192164,346.55 177,346.55 C82.8078359,346.55 6.45,270.192164 6.45,176 C6.45,81.8078359 82.8078359,5.45 177,5.45 C271.192164,5.45 347.55,81.8078359 347.55,176 L347.55,176 Z"
                  id="elementBox"
                  strokeWidth="1.10000002"
                  fill="yellow"
                ></path>
                <path
                  d="M338.45,176 C338.45,265.166373 266.166373,337.45 177,337.45 C87.8336271,337.45 15.55,265.166373 15.55,176 C15.55,86.8336271 87.8336271,14.55 177,14.55 C266.166373,14.55 338.45,86.8336271 338.45,176 L338.45,176 Z"
                  id="path2195"
                  strokeWidth="1.10000002"
                  fill="black"
                ></path>
                <path
                  d="M284.55,176 C284.55,235.398225 236.398225,283.55 177,283.55 C117.601775,283.55 69.45,235.398225 69.45,176 C69.45,116.601775 117.601775,68.45 177,68.45 C236.398225,68.45 284.55,116.601775 284.55,176 L284.55,176 Z"
                  id="TrebleRed"
                  strokeWidth="1.10000002"
                  fill="red"
                ></path>
                <path
                  d="M275.449997,176 C275.449998,211.172797 256.685534,243.673801 226.224999,261.2602 C195.764464,278.846598 158.235536,278.846598 127.775001,261.2602 C97.3144658,243.673801 78.5500025,211.172797 78.550003,176 C78.5500023,140.827203 97.3144655,108.326198 127.775001,90.7397999 C158.235536,73.1534013 195.764464,73.1534013 226.224999,90.7397999 C256.685534,108.326198 275.449998,140.827203 275.449997,176 L275.449997,176 Z"
                  id="path2197"
                  strokeWidth="1.10000002"
                  fill="yellow"
                ></path>
                <g id="GreenDoubleSpiders">
                  <path
                    fill={isHit("D5") ? hitt : doubleGreen}
                    d="M247.040324,61.7046644 C247.040324,79.6014366 244.223418,97.3866829 238.693012,114.407525 L76.4902901,61.7046644 L247.040324,61.7046644 Z"
                    id="path4826"
                    strokeWidth="1.10000024"
                    transform="translate(161.765307, 88.056095) rotate(-116.999962) translate(-161.765307, -88.056095) "
                  ></path>
                  <path
                    d="M198.257753,87.455221 C198.257753,105.351985 195.440849,123.137224 189.910445,140.158058 L27.7077936,87.455221 L198.257753,87.455221 Z"
                    fill={isHit("D9") ? hit : doubleGreen}
                    id="path4830"
                    strokeWidth="1.09999976"
                    transform="translate(112.982773, 113.806640) rotate(-152.999961) translate(-112.982773, -113.806640) "
                  ></path>
                  <path
                    fill={isHit("D11") ? hitt : doubleGreen}
                    d="M173.927612,136.961509 C173.927613,154.85827 171.110709,172.643506 165.580306,189.664337 L3.37768187,136.961509 L173.927612,136.961509 Z"
                    id="path4832"
                    strokeWidth="1.09999957"
                    transform="translate(88.652647, 163.312923) rotate(171.000023) translate(-88.652647, -163.312923) "
                  ></path>
                  <path
                    fill={isHit("D16") ? hitt : doubleGreen}
                    d="M183.343166,191.313773 C183.343166,209.210534 180.526262,226.99577 174.995859,244.016602 L12.7932338,191.313773 L183.343166,191.313773 Z"
                    id="path4834"
                    strokeWidth="1.09999958"
                    transform="translate(98.068200, 217.665187) rotate(135.000041) translate(-98.068200, -217.665187) "
                  ></path>
                  <path
                    fill={isHit("D19") ? hitt : doubleGreen}
                    d="M222.907998,229.751391 C222.907998,247.648155 220.091094,265.433393 214.56069,282.454227 L52.3580407,229.751391 L222.907998,229.751391 Z"
                    id="path4836"
                    strokeWidth="1.09999974"
                    transform="translate(137.633019, 256.102809) rotate(99.000033) translate(-137.633019, -256.102809) "
                  ></path>
                  <path
                    fill={isHit("D17") ? hitt : doubleGreen}
                    d="M277.50971,237.592475 C277.50971,255.489247 274.692805,273.274494 269.162398,290.295336 L106.959676,237.592475 L277.50971,237.592475 Z"
                    id="path4838"
                    strokeWidth="1.10000024"
                    transform="translate(192.234693, 263.943905) rotate(63.000038) translate(-192.234693, -263.943905) "
                  ></path>
                  <path
                    fill={isHit("D15") ? hitt : doubleGreen}
                    d="M326.292206,211.841942 C326.292207,229.738706 323.475302,247.523945 317.944898,264.544779 L155.742247,211.841942 L326.292206,211.841942 Z"
                    id="path4840"
                    strokeWidth="1.09999976"
                    transform="translate(241.017227, 238.193360) rotate(27.000039) translate(-241.017227, -238.193360) "
                  ></path>
                  <path
                    fill={isHit("D6") ? hitt : doubleGreen}
                    d="M350.622318,162.335663 C350.622319,180.232424 347.805415,198.01766 342.275012,215.038491 L180.072388,162.335663 L350.622318,162.335663 Z"
                    id="path4842"
                    strokeWidth="1.09999957"
                    transform="translate(265.347353, 188.687077) rotate(-8.999977) translate(-265.347353, -188.687077) "
                  ></path>
                  <path
                    fill={isHit("D4") ? hitt : doubleGreen}
                    d="M341.206766,107.983398 C341.206767,125.88016 338.389863,143.665396 332.85946,160.686227 L170.656834,107.983398 L341.206766,107.983398 Z"
                    id="path4844"
                    strokeWidth="1.09999958"
                    transform="translate(255.931800, 134.334813) rotate(-44.999959) translate(-255.931800, -134.334813) "
                  ></path>
                  <path
                    fill={isHit("D1") ? hitt : doubleGreen}
                    d="M301.641959,69.5457726 C301.64196,87.4425367 298.825055,105.227775 293.294651,122.248609 L131.092002,69.5457726 L301.641959,69.5457726 Z"
                    id="path4846"
                    strokeWidth="1.09999974"
                    transform="translate(216.366981, 95.897191) rotate(-80.999967) translate(-216.366981, -95.897191) "
                  ></path>
                  <path
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    fill={isHit("D20") ? hitt : doubleRed}
                    id="path0"
                  ></path>
                  <path
                    fill={isHit("D12") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(-36) translate(-151.25, -8) translate(-104, -17)"
                    id="path1"
                  ></path>
                  <path
                    fill={isHit("D14") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(-72) translate(-151.25, -8) translate(-178, -92)"
                    id="path2"
                  ></path>
                  <path
                    fill={isHit("D8") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(-108) translate(-151.25, -8) translate(-193.5, -195.5)"
                    id="path3"
                  ></path>
                  <path
                    fill={isHit("D7") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(-144) translate(-151.25, -8) translate(-145.7, -289)"
                    id="path4"
                  ></path>
                  <path
                    fill={isHit("D3") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(-180) translate(-151.25, -8) translate(-51.9, -336)"
                    id="path5"
                  ></path>
                  <path
                    fill={isHit("D2") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(-216) translate(-151.25, -8) translate(52, -319.5)"
                    id="path6"
                  ></path>
                  <path
                    fill={isHit("D10") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(-252) translate(-151.25, -8) translate(125.7, -245)"
                    id="path7"
                  ></path>
                  <path
                    fill={isHit("D13") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(72) translate(-151.25, -8) translate(142, -141)"
                    id="path8"
                  ></path>
                  <path
                    fill={isHit("D18") ? hitt : doubleRed}
                    d="M151.25,8 L152.5,16 C152.5,16 175,12 202,16 L203,8 C203,8 177,4 151.25,8Z"
                    transform="translate(151.25, 8) rotate(36) translate(-151.25, -8) translate(94, -47)"
                    id="path8"
                  ></path>
                </g>
                <g
                  id="SingleOuterGreen"
                  transform="translate(10.000000, 9.000000)"
                >
                  <path
                    fill={isHit("SO5") ? hitt : singleGreen}
                    d="M234.303197,58.8030972 C234.303195,75.744955 231.636588,92.5812373 226.401265,108.693901 L72.8531647,58.8030972 L234.303197,58.8030972 Z"
                    id="path4878"
                    strokeWidth="1.10000024"
                    transform="translate(153.578181, 83.748499) rotate(-116.999962) translate(-153.578181, -83.748499) "
                  ></path>
                  <path
                    fill={isHit("SO9") ? hitt : singleGreen}
                    d="M188.123507,83.1796871 C188.123506,100.121537 185.4569,116.957812 180.221579,133.070469 L26.6735457,83.1796871 L188.123507,83.1796871 Z"
                    id="path4880"
                    strokeWidth="1.09999976"
                    transform="translate(107.398526, 108.125078) rotate(-152.999961) translate(-107.398526, -108.125078) "
                  ></path>
                  <path
                    fill={isHit("SO11") ? hitt : singleGreen}
                    d="M165.091545,130.044479 C165.091543,146.986326 162.424938,163.822598 157.189618,179.935252 L3.64161099,130.044479 L165.091545,130.044479 Z"
                    id="path4882"
                    strokeWidth="1.09999957"
                    transform="translate(84.366578, 154.989865) rotate(171.000023) translate(-84.366578, -154.989865) "
                  ></path>
                  <path
                    fill={isHit("SO16") ? hitt : singleGreen}
                    d="M174.004715,181.49668 C174.004714,198.438528 171.338109,215.2748 166.102789,231.387454 L12.5547796,181.49668 L174.004715,181.49668 Z"
                    id="path4884"
                    strokeWidth="1.09999958"
                    transform="translate(93.279748, 206.442067) rotate(135.000041) translate(-93.279748, -206.442067) "
                  ></path>
                  <path
                    fill={isHit("SO19") ? hitt : singleGreen}
                    d="M211.458495,217.88339 C211.458494,234.82524 208.791888,251.661515 203.556567,267.774171 L50.0085358,217.88339 L211.458495,217.88339 Z"
                    id="path4886"
                    strokeWidth="1.09999974"
                    transform="translate(130.733515, 242.828781) rotate(99.000033) translate(-130.733515, -242.828781) "
                  ></path>
                  <path
                    fill={isHit("SO17") ? hitt : singleGreen}
                    d="M263.146835,225.306099 C263.146834,242.247957 260.480227,259.084239 255.244904,275.196903 L101.696803,225.306099 L263.146835,225.306099 Z"
                    id="path4888"
                    strokeWidth="1.10000024"
                    transform="translate(182.421819, 250.251501) rotate(63.000038) translate(-182.421819, -250.251501) "
                  ></path>
                  <path
                    fill={isHit("SO15") ? hitt : singleGreen}
                    d="M309.326454,200.929531 C309.326453,217.871381 306.659847,234.707656 301.424526,250.820313 L147.876493,200.929531 L309.326454,200.929531 Z"
                    id="path4890"
                    strokeWidth="1.09999976"
                    transform="translate(228.601474, 225.874922) rotate(27.000039) translate(-228.601474, -225.874922) "
                  ></path>
                  <path
                    fill={isHit("SO6") ? hitt : singleGreen}
                    d="M332.358389,154.064748 C332.358388,171.006595 329.691782,187.842867 324.456462,203.955521 L170.908455,154.064748 L332.358389,154.064748 Z"
                    id="path4892"
                    strokeWidth="1.09999957"
                    transform="translate(251.633422, 179.010135) rotate(-8.999977) translate(-251.633422, -179.010135) "
                  ></path>
                  <path
                    fill={isHit("SO4") ? hitt : singleGreen}
                    d="M323.44522,102.612546 C323.445219,119.554394 320.778614,136.390666 315.543294,152.50332 L161.995285,102.612546 L323.44522,102.612546 Z"
                    id="outer-4"
                    strokeWidth="1.09999958"
                    transform="translate(242.720252, 127.557933) rotate(-44.999959) translate(-242.720252, -127.557933) "
                  ></path>
                  <path
                    fill={isHit("SO1") ? hitt : singleGreen}
                    d="M285.991464,66.2258287 C285.991463,83.1676788 283.324857,100.003954 278.089536,116.11661 L124.541505,66.2258287 L285.991464,66.2258287 Z"
                    id="outer-1"
                    strokeWidth="1.09999974"
                    transform="translate(205.266485, 91.171219) rotate(-80.999967) translate(-205.266485, -91.171219) "
                  ></path>
                  <path
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    fill={isHit("SO20") ? hitt : singleRed}
                  ></path>
                  <path
                    fill={isHit("SO12") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(151.25, 8) rotate(-36) translate(-151.25, -8) translate(-96.5, -21.5)"
                    id="path1"
                  ></path>
                  <path
                    fill={isHit("SO14") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(-72) translate(-143, -8)     translate(-168, -88)"
                    id="path2"
                  ></path>
                  <path
                    fill={isHit("SO8") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(-108) translate(-143, -8)    translate(-183, -186)"
                    id="path3"
                  ></path>
                  <path
                    fill={isHit("SO7") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(-144) translate(-143, -8)    translate(-137.5, -275)"
                    id="path4"
                  ></path>
                  <path
                    fill={isHit("SO3") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(-180) translate(-143, -8)    translate(-48.5, -319)"
                    id="path5"
                  ></path>
                  <path
                    fill={isHit("SO2") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(-216) translate(-143, -8)    translate(49.5, -303)"
                    id="path6"
                  ></path>
                  <path
                    fill={isHit("SO10") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(-252) translate(-143, -8)    translate(119.5, -232)"
                    id="path7"
                  ></path>
                  <path
                    fill={isHit("SO13") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(72) translate(-143, -8)      translate(134.5, -134)"
                    id="path8"
                  ></path>
                  <path
                    fill={isHit("SO18") ? hitt : singleRed}
                    d="M143,8 L151,62 C151,62 166,58 183,62 L192,8 C192,8 164,3 143,8 Z"
                    transform="translate(143, 8) rotate(36) translate(-143, -8) translate(89, -46)"
                    id="path8"
                  ></path>
                </g>
                <g
                  id="GreenTrebleSpiders"
                  transform="translate(64.000000, 66.000000)"
                >
                  <path
                    fill={isHit("T20") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    id="path0"
                  ></path>
                  <path
                    fill={isHit("T12") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(-36) translate(-97, -5) translate(-64.5, -12)"
                    id="path1"
                  ></path>
                  <path
                    fill={isHit("T14") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(-72) translate(-97, -5) translate(-111.5, -59)"
                    id="path2"
                  ></path>
                  <path
                    fill={isHit("T8") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(-108) translate(-97, -5) translate(-121, -124.3)"
                    id="path3"
                  ></path>
                  <path
                    fill={isHit("T7") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(-144) translate(-97, -5) translate(-90.5, -182.5)"
                    id="path4"
                  ></path>
                  <path
                    fill={isHit("T3") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(-180) translate(-97, -5) translate(-32, -212)"
                    id="path5"
                  ></path>
                  <path
                    fill={isHit("T2") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(-216) translate(-97, -5) translate(32.5, -201)"
                    id="path6"
                  ></path>
                  <path
                    fill={isHit("T10") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(-252) translate(-97, -5) translate(79, -154)"
                    id="path7"
                  ></path>
                  <path
                    fill={isHit("T13") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(72)  translate(-97, -5) translate(89.5, -88.4)"
                    id="path8"
                  ></path>
                  <path
                    fill={isHit("T18") ? hitt : doubleRed}
                    d="M97,5 L98.5,14 C98.5,14 114,11 127,14 L128.5,5 C128.5,5 115,1 97,5 Z"
                    transform="translate(97, 5) rotate(36)  translate(-97, -5) translate(59.2, -30)"
                    id="path8"
                  ></path>
                  <path
                    fill={isHit("T1") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(35,0) translate(97, 5) rotate(16) translate(-97, -5) translate(-3, 0)"
                    id="path0"
                  ></path>
                  <path
                    fill={isHit("T5") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(31.5,1) translate(97, 5) rotate(-18) translate(-97, -5) translate(-64.5, -12)"
                    id="path1"
                  ></path>
                  <path
                    fill={isHit("T9") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(33,1.5) translate(97, 5) rotate(-54) translate(-97, -5) translate(-111.5, -59)"
                    id="path2"
                  ></path>
                  <path
                    fill={isHit("T16") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(34,2) translate(97, 5) rotate(-126) translate(-97, -5) translate(-90.5, -182.5)"
                    id="path4"
                  ></path>
                  <path
                    fill={isHit("T11") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(33,2) translate(97, 5) rotate(-90) translate(-97, -5) translate(-121, -124.3)"
                    id="path3"
                  ></path>
                  <path
                    fill={isHit("T19") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(35,2) translate(97, 5) rotate(-162) translate(-97, -5) translate(-32, -212)"
                    id="path5"
                  ></path>
                  <path
                    fill={isHit("T17") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(35,1) translate(97, 5) rotate(-198) translate(-97, -5) translate(32.5, -201)"
                    id="path6"
                  ></path>
                  <path
                    fill={isHit("T15") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(35,-1) translate(97, 5) rotate(-234) translate(-97, -5) translate(79, -154)"
                    id="path7"
                  ></path>
                  <path
                    fill={isHit("T6") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(34.5,-2) translate(97, 5) rotate(-270)  translate(-97, -5) translate(89.5, -88.4)"
                    id="path8"
                  ></path>
                  <path
                    fill={isHit("T4") ? hitt : doubleGreen}
                    d="M97,5 L98.2,15 C98.2,15 114,12 130.5,16.6 L132,6 C132,6 114,1 97,5 Z"
                    transform="translate(33, -1.5) translate(97, 5) rotate(-306)  translate(-97, -5) translate(59.2, -30)"
                    id="path8"
                  ></path>
                </g>
                <g
                  id="SingleInnerGreen"
                  transform="translate(74.000000, 75.000000)"
                >
                  <path
                    fill={isHit("SI5") ? hitt : singleGreen}
                    d="M142.430781,36.0230113 C142.430781,46.353924 140.804721,56.6204584 137.612294,66.4457403 L43.9807643,36.0230113 L142.430781,36.0230113 Z"
                    id="path5773"
                    strokeWidth="1.10000024"
                    transform="translate(2,0) translate(93.205773, 51.234376) rotate(-116.999962) translate(-93.205773, -51.234376) "
                  ></path>
                  <path
                    fill={isHit("SI9") ? hitt : singleGreen}
                    d="M114.271039,50.8875215 C114.271039,61.2184297 112.64498,71.4849596 109.452554,81.3102372 L15.8210655,50.8875215 L114.271039,50.8875215 Z"
                    id="path5775"
                    strokeWidth="1.09999976"
                    transform="translate(67, 66.8) rotate(-152.999961) translate(-65.046052, -66.098879) "
                  ></path>
                  <path
                    fill={isHit("SI11") ? hitt : singleGreen}
                    d="M100.226464,79.4650289 C100.226464,89.7959354 98.6004056,100.062464 95.4079799,109.887739 L1.7765072,79.4650289 L100.226464,79.4650289 Z"
                    id="path5777"
                    strokeWidth="1.09999957"
                    transform="translate(2,0) translate(51.001486, 94.676384) rotate(171.000023) translate(-51.001486, -94.676384) "
                  ></path>
                  <path
                    fill={isHit("SI16") ? hitt : singleGreen}
                    d="M105.661593,110.839876 C105.661593,121.170783 104.035535,131.437311 100.843109,141.262587 L7.21163508,110.839876 L105.661593,110.839876 Z"
                    id="path5779"
                    strokeWidth="1.09999958"
                    transform="translate(2,-1) translate(56.436614, 126.051232) rotate(135.000041) translate(-56.436614, -126.051232) "
                  ></path>
                  <path
                    fill={isHit("SI19") ? hitt : singleGreen}
                    d="M128.500394,133.027993 C128.500394,143.358901 126.874336,153.625431 123.681909,163.450709 L30.0504221,133.027993 L128.500394,133.027993 Z"
                    id="path5781"
                    strokeWidth="1.09999974"
                    transform="translate(2,-1) translate(79.275408, 148.239351) rotate(99.000033) translate(-79.275408, -148.239351) "
                  ></path>
                  <path
                    fill={isHit("SI17") ? hitt : singleGreen}
                    d="M160.019236,137.55426 C160.019236,147.885172 158.393176,158.151707 155.200749,167.976989 L61.5692193,137.55426 L160.019236,137.55426 Z"
                    id="path5783"
                    strokeWidth="1.10000024"
                    transform="translate(1,-1) translate(110.794227, 152.765624) rotate(63.000038) translate(-110.794227, -152.765624) "
                  ></path>
                  <path
                    fill={isHit("SI15") ? hitt : singleGreen}
                    d="M188.178934,122.689763 C188.178935,133.020671 186.552876,143.287201 183.36045,153.112479 L89.7289611,122.689763 L188.178934,122.689763 Z"
                    id="path5785"
                    strokeWidth="1.09999976"
                    transform="translate(1,-2) translate(138.953948, 137.901121) rotate(27.000039) translate(-138.953948, -137.901121) "
                  ></path>
                  <path
                    fill={isHit("SI6") ? hitt : singleGreen}
                    d="M202.223493,94.1122605 C202.223493,104.443167 200.597434,114.709695 197.405009,124.534971 L103.773536,94.1122605 L202.223493,94.1122605 Z"
                    id="path5787"
                    strokeWidth="1.09999957"
                    transform="translate(0,0) translate(152.998514, 109.323616) rotate(-8.999977) translate(-152.998514, -109.323616) "
                  ></path>
                  <path
                    fill={isHit("SI4") ? hitt : singleGreen}
                    d="M196.788365,62.737413 C196.788365,73.0683195 195.162307,83.3348479 191.969881,93.1601239 L98.3384071,62.737413 L196.788365,62.737413 Z"
                    id="path5789"
                    strokeWidth="1.09999958"
                    transform="translate(0,0) translate(147.563386, 77.948768) rotate(-44.999959) translate(-147.563386, -77.948768) "
                  ></path>
                  <path
                    fill={isHit("SI1") ? hitt : singleGreen}
                    d="M173.949578,43.5492914 C173.949578,53.8801994 172.323519,64.1467292 169.131093,73.9720067 L75.4996058,43.5492914 L173.949578,43.5492914 Z"
                    id="path5791"
                    strokeWidth="1.09999974"
                    transform="translate(0,-2) translate(124.724592, 58.760649) rotate(-80.999967) translate(-124.724592, -58.760649) "
                  ></path>
                  <path
                    fill={isHit("SI20") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9)"
                    id="path0"
                  ></path>
                  <path
                    fill={isHit("SI12") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(-36) translate(-97, -5) translate(-64.5, -12)"
                    id="path1"
                  ></path>
                  <path
                    fill={isHit("SI14") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(-72) translate(-97, -5) translate(-111.5, -59)"
                    id="path2"
                  ></path>
                  <path
                    fill={isHit("SI8") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(-108) translate(-97, -5) translate(-121, -124.3)"
                    id="path3"
                  ></path>
                  <path
                    fill={isHit("SI7") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(-144) translate(-97, -5) translate(-90.5, -182.5)"
                    id="path4"
                  ></path>
                  <path
                    fill={isHit("SI3") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(-180) translate(-97, -5) translate(-32, -212)"
                    id="path5"
                  ></path>
                  <path
                    fill={isHit("SI2") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(-216) translate(-97, -5) translate(32.5, -201)"
                    id="path6"
                  ></path>
                  <path
                    fill={isHit("SI10") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(-252) translate(-97, -5) translate(79, -154)"
                    id="path7"
                  ></path>
                  <path
                    fill={isHit("SI13") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(72)  translate(-97, -5) translate(89.5, -88.4)"
                    id="path8"
                  ></path>
                  <path
                    fill={isHit("SI18") ? hitt : singleRed}
                    d="M127,14 L112,110 L98.5,14 C98.5,14 114,11 127,14 Z "
                    transform="translate(-10,-9) translate(97, 5) rotate(36)  translate(-97, -5) translate(59.2, -30)"
                    id="path8"
                  ></path>
                </g>
                <path
                  fill={isHit("SB") ? hitt : doubleGreen}
                  d="M193.450001,176 C193.450001,185.085085 186.085085,192.450001 177,192.450001 C167.914915,192.450001 160.549999,185.085085 160.549999,176 C160.549999,166.914915 167.914915,159.549999 177,159.549999 C186.085085,159.549999 193.450001,166.914915 193.450001,176 L193.450001,176 Z"
                  id="InnerGreen"
                  strokeWidth="1.10000002"
                ></path>
                <path
                  fill={isHit("B") ? hitt : doubleRed}
                  d="M183.9,177 C183.9,180.810765 180.810765,183.9 177,183.9 C173.189235,183.9 170.1,180.810765 170.1,177 C170.1,173.189235 173.189235,170.1 177,170.1 C180.810765,170.1 183.9,173.189235 183.9,177 L183.9,177 Z"
                  id="InnerRed"
                  strokeWidth="1.10000002 "
                ></path>
              </g>
              <g
                id="BoardNumbers"
                transform="translate(13.000000, 11.000000)"
                fontSize="28"
                fontFamily="Helvetica"
                fill="#FFFFFF"
                fontWeight="normal"
              >
                <text id="tspan6009">
                  <tspan x="198.04829" y="28.17502">
                    20
                  </tspan>
                </text>
                <text id="tspan6897">
                  <tspan x="266.872234" y="35.63376">
                    1
                  </tspan>
                </text>
                <text id="tspan6907">
                  <tspan x="315.0151" y="65.46878">
                    18
                  </tspan>
                </text>
                <text id="tspan6913">
                  <tspan x="368.24347" y="112.25551">
                    4
                  </tspan>
                </text>
                <text id="tspan6917">
                  <tspan x="388.92455" y="170.230358">
                    13
                  </tspan>
                </text>
                <text id="tspan6968">
                  <tspan x="402.14688" y="225.153896">
                    6
                  </tspan>
                </text>
                <text id="tspan6925">
                  <tspan x="386.5513" y="283.467781">
                    10
                  </tspan>
                </text>
                <text id="tspan6929">
                  <tspan x="357.7334" y="343.13781">
                    15
                  </tspan>
                </text>
                <text id="tspan6933">
                  <tspan x="321.11771" y="385.85611">
                    2
                  </tspan>
                </text>
                <text id="tspan6977">
                  <tspan x="257.718311" y="412.63982">
                    17
                  </tspan>
                </text>
                <text id="tspan6981">
                  <tspan x="208.897384" y="424.16699">
                    3
                  </tspan>
                </text>
                <text id="tspan6985">
                  <tspan x="140.751503" y="415.01306">
                    19
                  </tspan>
                </text>
                <text id="tspan6989">
                  <tspan x="91.25252" y="389.24644">
                    7
                  </tspan>
                </text>
                <text id="tspan6993">
                  <tspan x="40.05835" y="343.13781">
                    16
                  </tspan>
                </text>
                <text id="tspan6997">
                  <tspan x="21.41145" y="288.892326">
                    8
                  </tspan>
                </text>
                <text id="tspan7013">
                  <tspan x="0.39133" y="224.814864">
                    11
                  </tspan>
                </text>
                <text id="tspan7017">
                  <tspan x="6.49394" y="167.179047">
                    14
                  </tspan>
                </text>
                <text id="tspan7021">
                  <tspan x="49.89035" y="106.49191">
                    9
                  </tspan>
                </text>
                <text id="tspan7025">
                  <tspan x="80.74245" y="63.77361">
                    12
                  </tspan>
                </text>
                <text id="tspan7029">
                  <tspan x="147.532188" y="37.32893">
                    5
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
