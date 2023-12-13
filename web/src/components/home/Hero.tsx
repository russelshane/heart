"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../Button";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="site-container">
        <header className="home-header">
          <div className="menu">
            <div className="home-logo" />
            <nav className="home-nav">
              <div className="nav-item">
                <Link href="/">Product</Link>
              </div>
              <div className="nav-item">
                <ScrollLink to="use-cases" smooth={true} duration={500}>
                  Use Cases
                </ScrollLink>
              </div>
              <ScrollLink to="features" smooth={true} duration={500}>
                <div className="nav-item">Features</div>
              </ScrollLink>
              <div className="nav-item">GitHub</div>
              <div className="nav-item">Docs</div>
            </nav>
          </div>
          <div className="nav-user-control">
            <Button variant="ghost">Log In</Button>
            <Button>Get Started</Button>
          </div>
        </header>
      </div>

      <div className="hero-spotlight">
        <h1 className="hero-headline">
          Your <span className="highlight"> digital writing</span> companion.
        </h1>
        <Button variant="outline">✏️ Start Publishing</Button>
        <div className="hero-feature">
          <span className="label">POWERED BY &nbsp;→</span>
          <div className="features">
            <img
              alt=""
              src="https://ik.imagekit.io/drs/heartcms/websocket_logo_fxYAZgIxf.svg?updatedAt=1700483267479"
            />
            <img
              alt=""
              src="https://ik.imagekit.io/drs/heartcms/2560px-Amazon_Web_Services_Logo.svg_0WEoJ2u3o.png?updatedAt=1700481517972"
            />
            <img
              alt=""
              src="https://ik.imagekit.io/drs/heartcms/Postgresql_elephant.svg_9hgX5owJq.png?updatedAt=1700482270134"
            />
            <img
              alt=""
              style={{ maxHeight: "35px" }}
              src="https://ik.imagekit.io/drs/heartcms/Vercel_logo_black.svg_nV3_EI1Z8.png?updatedAt=1700482499038"
            />
          </div>
        </div>
      </div>

      <div />
    </div>
  );
};
