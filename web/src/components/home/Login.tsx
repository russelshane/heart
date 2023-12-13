"use client";

import { useState } from "react";

export const LoginPane = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="left-pane">
      <div className="left-pane-container">
        <div className="logo" />
      </div>
      <div className="left-pane-backdrop" />
    </div>
  );
};
