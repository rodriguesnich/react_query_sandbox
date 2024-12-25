import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={HeaderStylesContainer}>
      <div style={HeaderContentStyles}>
        <h2>Header</h2>
        <div style={{ display: "flex", gap: "2rem"}}>
          <Link style={HeaderLinkStyles} to={"/"}>Client Search</Link>
          <Link style={HeaderLinkStyles} to={"/server"}>Server Search</Link>
        </div>
      </div>

    </div>
  );
}

const HeaderStylesContainer: React.CSSProperties = {
  color: "white",
  width: "90vw",
  height: "3.5rem",
  borderBottom: "1px solid white",
  marginBottom: "2rem",
};

const HeaderContentStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const HeaderLinkStyles: React.CSSProperties = {
  color: "white",
  textDecoration: "underline",
};

export default Header;
