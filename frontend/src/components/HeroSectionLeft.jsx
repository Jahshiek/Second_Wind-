import React from "react";

function HeroSectionLeft() {
  return (
    <div className="hero-section-left">
      <image
        src="../SVG/logo_purple.svg"
        alt=""
        className="logo"
      />
      <div className="hero-description">
        <h1>Connecting returning citizens back to their society</h1>
        <p>
          Helping ex-convicts reintegrate into society involves providing them
          with essential resources like jobs, housing healthcare and many more
          to rebuild their lives.
        </p>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </div>
  );
}

export default HeroSectionLeft;
