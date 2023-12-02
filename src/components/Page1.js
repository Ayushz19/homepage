import React from "react";
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="main">
      <div className="section-1">
        <div className="para-1">
          <h3>👋 WELCOME TO MANAGE WISE!</h3>
        </div>
        <div className="para-2">
          <h1>
            Empower your business with
            <br />
            <span className="strat" style={{ color: "rgb(254, 129, 98)" }}>
              Strategic
            </span>{" "}
            insights
          </h1>
        </div>
        <div className="para-3">
          <h2>
            Powerful management platform designed to streamline your business
            <br />
            operations, boost productivity, and drive success
          </h2>
        </div>
      </div>
      <div className="button-1">
        <button className="start">Get Started</button>
        <button className="demo">Watch Demo</button>
      </div>
    </div>
  );
};

export default Page1;
