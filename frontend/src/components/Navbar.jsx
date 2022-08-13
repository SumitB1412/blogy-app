import React from "react";
import styles from "../styles/navbar.module.css";
import { RiAccountCircleLine } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img
          src="https://assets.website-files.com/601b0e022dc24f4ea11206ad/601e8c72c9acbbd5cb31dfcc_Blogy%20-%20Black%20Logo.svg"
          alt="application_logo"
        />
      </div>
      <div>
        <p>Home</p>
        <p>Tech</p>
        <p>Travel</p>
        <p>Food</p>
      </div>
      <div>
        <RiAccountCircleLine fontSize="24px" style={{marginRight:"10%"}} />
        <GrAdd fontSize="22px" style={{marginRight:"5%"}} />
        <BsSearch fontSize="18px" style={{marginRight:"5%"}}/>
      </div>
    </div>
  );
};
