import React from "react";

function Header() {
  return (
    <div style={HeaderStyles}>
      <h2>Header</h2>
    </div>
  );
}

const HeaderStyles: React.CSSProperties = {
  color: "white",
  width: "90vw",
  height: "3.5rem",
  borderBottom: "1px solid white",
  marginBottom: "2rem",
};

export default Header;
