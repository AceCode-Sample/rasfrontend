import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import "./Header.css";
import mainLogo from "./assets/Aquinas_Logo.png";

const HeaderPanel = () => {

  const linkList = [
    { label: "Scan RFID", value: "/" },
    { label: "View IO List", value: "/about" },
    { label: "Student List", value: "/services" },
    { label: "Manager", value: "/contact" },
  ];

  return (
    <div className="headerPanel">
      <div className="headerLogo">
        <img src={mainLogo} alt="" />
        <h1>Aquinas RAS</h1>
      </div>
      <div className="headerInfo">
        <select id="" name="">
          <option value="" disabled>MENU</option>
          <option value="Scan RFID">Scan RFID</option>
          <option value="View IO List">View IO List</option>
          <option value="">Student List</option>
          <option value="">RFID Manager</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderPanel;
