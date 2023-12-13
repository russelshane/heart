"use client";

import { Element } from "react-scroll";

export const UseCasesSection = () => {
  return (
    <Element name="use-cases">
      <div className="use-cases-section">
        <div className="ucs-header">
          <div className="site-container">
            <div className="ucs-head">
              <h6 className="headline-label">USE CASES</h6>
              <h1 className="headline inverse left md">
                A CMS for all your writing needs.
              </h1>
            </div>
          </div>
        </div>
        <div className="site-container">
          <div className="ucs-grid">
            <div className="ucs-box">
              <span className="number">01</span>
              <h1 className="title">Blogs</h1>
              <p className="excerpt">
                HeartCMS can power and distribute the content of your blogs,
                online memoirs and journals in an extremely fast, manageable and
                scalable environment.
              </p>
            </div>
            <div className="ucs-box">
              <span className="number">02</span>
              <h1 className="title">Newsrooms</h1>
              <p className="excerpt">
                Our collaborative features make it easy for reporters, editors,
                columnists to edit and publish articles directly to their
                frontend in a timely manner.
              </p>
            </div>
            <div className="ucs-box">
              <span className="number">03</span>
              <h1 className="title">Web Magazines</h1>
              <p className="excerpt">
                Write content for your digital or online magazine in neatly
                organized sections using topics and tags.{" "}
              </p>
            </div>
            <div className="ucs-box">
              <span className="number">06</span>
              <h1 className="title">Omnichannel</h1>
              <p className="excerpt">
                Author content in one place, but use it anywhere. Truly decouple
                your content from your presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
