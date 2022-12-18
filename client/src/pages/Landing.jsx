import React from "react";
import { logo, landing } from "../assets";

const Landing = () => {
  return (
    <div>
      <img src={logo} style={{ height: "150px" }} alt="" srcset="" />
      <div style={{ display: "flex", gap: "150px" }}>
        <img src={landing} style={{ height: "650px" }} alt="" srcset="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginTop: "140px",
          }}
        >
          <h1>✨ Support causes</h1>
          <h1>✨ Make tech accessible</h1>
          <h1>✨ Transparent and verifiable</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
