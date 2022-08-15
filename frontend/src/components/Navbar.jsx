import React from "react";
import styles from "../styles/navbar.module.css";
import { RiAccountCircleLine } from "react-icons/ri";
// import { GrAdd } from "react-icons/gr";
// import { BsSearch } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div>
        <img
          src="https://assets.website-files.com/601b0e022dc24f4ea11206ad/601e8c72c9acbbd5cb31dfcc_Blogy%20-%20Black%20Logo.svg"
          alt="application_logo"
        />
      </div>
      <div>
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/categories/tech")}>Tech</p>
        <p onClick={() => navigate("/categories/travel")}>Travel</p>
        <p onClick={() => navigate("/categories/food")}>Food</p>
      </div>
      <div>
        <RiAccountCircleLine
          onClick={() => navigate("/login")}
          fontSize="26px"
          style={{ marginRight: "5%" }}
          cursor="pointer"
        />
        <BsPencilSquare
          onClick={() => navigate("/new-blog")}
          fontSize="23px"
          style={{ marginRight: "5%" }}
          cursor="pointer"
        />
        {/* <BsSearch
          fontSize="18px"
          style={{ marginRight: "5%" }}
          cursor="pointer"
        /> */}
      </div>
    </div>
  );
};
