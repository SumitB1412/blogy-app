import React from "react";
import styles from "../styles/footer.module.css";
import { FaHeart } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.child1}>
        <div>
          <img
            src="https://assets.website-files.com/601b0e022dc24f4ea11206ad/601ec3aa8cab6c855d0b3c2a_Blogy%20-%20White%20Logo.svg"
            alt=""
          />
        </div>
        <div>
          <p>Made with <FaHeart color="red" /> by Sumit Beniwal</p>
        </div>
        <div>
            <AiFillLinkedin />
            <AiFillGithub/>
            <SiNetlify />
        </div>
      </div>
      <div className={styles.child2}>
        <div>
            
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
