import React from "react";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <CameraEnhanceIcon fontSize="large" />
      <div className="details">
        <h4>Help</h4>
      </div>
    </div>
  );
}

export default Header;
