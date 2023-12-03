/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Page1.css";
import image1 from "./image1.webp";
import image3 from "./image3.webp";
import image4 from "./image4.webp";
import image5 from "./image5.webp";

const Page1 = () => {
  return (
    <div className="main" style={{ backgroundColor: "#FFF5EC" }}>
      <div className="container-main-1   ">
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
        <div className="image1-class">
          <img src={image1} className="image1" />
        </div>
      </div>
      <div className="main-container-2" style={{ backgroundColor: "white" }}>
        <div className="section-2">
          <div className="pre">
            <h3>🔥PREMIER FEATURES</h3>
          </div>
          <div className="our-pro">
            <h1 style={{ fontSize: "46px" }}>
              Discover Our product's{" "}
              <span className="capa" style={{ color: "rgb(254, 129, 98)" }}>
                Capabilities
              </span>
            </h1>
          </div>
          <p
            style={{
              color: "grey",
              marginTop: "12px",
              fontSize: "22px",
              marginBottom: "4rem",
            }}
          >
            Don't settle for mediocrity - embrace the future of management{" "}
            <br />
            with Manage Wise.
          </p>
          <div className="boost">
            <div className="left">
              <p className="boost-pro">
                ⭐️
                <br />
                Boost productivity and streamline workflow with us. Enjoy our
                intuitive interface and robust features.
              </p>
            </div>
            <div className="right">
              <div className="image-3">
                <img src={image3} className="image-3" />
                <div className="smart-task">
                  <h2>Smart Task management</h2>
                  <p style={{ color: "grey" }}>
                    Say goodbye to chaos with our smart task management system
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="three-box">
            <div className="box-1">
              <img src={image4} className="image4" />
              <div className="box-inside">
                <h2 className="flexi">Flexible Scheduling</h2>
                <p style={{ color: "grey" }}>
                  Stay productive with our flexible scheduling system
                </p>
              </div>
            </div>
            <div className="box-1">
              <img src={image4} className="image4" />
              <div className="box-inside">
                <h2 className="flexi">Easy Communication</h2>
                <p style={{ color: "grey" }}>
                  Collaborate seamlessly with your team in real-time
                </p>
              </div>
            </div>
            <div className="box-1">
              <img src={image4} className="image4" />
              <div className="box-inside">
                <h2 className="flexi">Analytics</h2>
                <p style={{ color: "grey" }}>
                  Gain valuable insights with our advanced analytics feature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container-3" style={{ backgroundColor: "#000000" }}>
        <div>
          <div className="and-more">And More</div>
          <div className="productivity">
            Explore an array of features that elevate your
            <br />
            <span style={{ color: "rgb(254, 129, 98)" }}>Productivity</span> to
            new heights
          </div>
          <p style={{ color: "grey", fontSize: "20px" }}>
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </p>
        </div>
        <div className="cross-box">
          <div className="cross-box-1">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="54"
              height="54"
              color='var(--token-25b49406-73f2-421a-adb7-81b18f488918, rgb(253, 242, 236)) /* {"name":"Background"} */'
            >
              <path
                fill-rule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 style={{ color: "white" }}>Cross-Platform Compatibility</h4>
            <p style={{ color: "grey" }}>
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device
            </p>
          </div>
          <div className="cross-box-1">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="54"
              height="54"
              color='var(--token-25b49406-73f2-421a-adb7-81b18f488918, rgb(253, 242, 236)) /* {"name":"Background"} */'
            >
              <path
                fill-rule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 style={{ color: "white" }}>Cross-Platform Compatibility</h4>
            <p style={{ color: "grey" }}>
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device
            </p>
          </div>
          <div className="cross-box-1">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="54"
              height="54"
              color='var(--token-25b49406-73f2-421a-adb7-81b18f488918, rgb(253, 242, 236)) /* {"name":"Background"} */'
            >
              <path
                fill-rule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 style={{ color: "white" }}>Cross-Platform Compatibility</h4>
            <p style={{ color: "grey" }}>
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device
            </p>
          </div>
        </div>
        <div className="integrations">
          <h3>Integrations</h3>
        </div>
        <div className="enable">
          <h1 style={{ color: "white" }} className="tools">
            Enable{" "}
            <span style={{ color: "rgb(254, 129, 98)" }}>integration</span> with
            other popular tools and platforms
          </h1>
        </div>
        <div className="para-div">
          <p className="enable-para" style={{ color: "grey" }}>
            Seamlessly connect and amplify your workflow by enabling integration
            with a diverse array of widely-used tools and platforms.
          </p>
        </div>
        <div className="init-image">
          <img className="int-img" src={image5} />
        </div>
      </div>
      <div className="main-container-4">
        <div className="section-4">
          <div className="left-2">
            <h3>🙋‍♀️ FAQ</h3>
            <h1>
              NEED <span style={{ color: "rgb(254, 129, 98)" }}> ANSWERS?</span>
            </h1>
            <p style={{ color: "grey" }}>
              Check out our most commonly asked questions below to find the
              information you need.
            </p>
          </div>
          <div className="right-2">
            <div className="row-1">
              <h2>What is Manage Wise and what does it offer?</h2>
              <span className="plus">+</span>
            </div>
            <div className="row-1">
              <h2>What is Manage Wise and what does it offer?</h2>
              <span className="plus">+</span>
            </div>
            <div className="row-1">
              <h2>What is Manage Wise and what does it offer?</h2>
              <span className="plus">+</span>
            </div>
            <div className="row-1">
              <h2>What is Manage Wise and what does it offer?</h2>
              <span className="plus">+</span>
            </div>
            <div className="row-1">
              <h2>What is Manage Wise and what does it offer?</h2>
              <span className="plus">+</span>
            </div>
          </div>
        </div>
        <div className="price">
          <h3>💲Pricing</h3>
        </div>
        <div className="ideal">
          <h1>Select your ideal <span style={{ color: "rgb(254, 129, 98)" }}>pricing</span> price </h1>
          <p style={{fontSize:"20px" , color:"grey"}}>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
