import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" >
        <span role="img">&copy;</span> Copyright Ajayraj Rathod, All Rights Reserved.
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
      <style jsx>{`
        .footer-text {
          color: #777; /* Light gray text */
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
