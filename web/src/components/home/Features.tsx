"use client";
import { Element } from "react-scroll";

export const FeaturesSection = () => {
  return (
    <Element name="features">
      <div className="features-section">
        <h6 className="headline-label">FEATURES</h6>
        <h1 className="headline left">
          Experience our concurrent approach for
          <br />
          developers and publishers.
        </h1>

        <div className="features">
          <div className="feature">
            <div className="lede">
              <span className="number">01</span>
              <h2 className="title">Open-source</h2>
            </div>
            <p className="excerpt">
              Except for exclusive frontends being used by organizations. Heart
              is a 100% open-source on GitHub.
            </p>
          </div>
          <div
            className="feature"
            style={{
              borderTop: "1px solid #bcbcbc",
              borderBottom: "1px solid #bcbcbc",
              padding: "40px 0",
            }}
          >
            <div className="lede">
              <span className="number">02</span>
              <h2 className="title">Collaborative</h2>
            </div>
            <p className="excerpt">
              Our editor that’s built in React offers collaborative features
              such as real-time chat, group notes, etc.
            </p>
          </div>
          <div className="feature">
            <div className="lede">
              <span className="number">03</span>
              <h2 className="title">REST & GraphQL</h2>
            </div>
            <p className="excerpt">
              Developers can fetch data directly from either our REST API or our
              fully-documented GraphQL playground.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};
