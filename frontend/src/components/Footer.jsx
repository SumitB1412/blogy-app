import React from "react";
import styles from "../styles/footer.module.css";
import { FaHeart } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  const linkedin = () => {
    window.open("https://www.linkedin.com/in/beniwalsumit/", "_blank");
  };
  const github = () => {
    window.open("https://github.com/SumitB1412", "_blank");
  };
  const portfolio = () => {
    window.open("https://sumitbeniwal.vercel.app/", "_blank");
  };
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
          <p>
            Made with <FaHeart color="red" /> by Sumit Beniwal
          </p>
        </div>
        <div>
          <AiFillLinkedin cursor="pointer" onClick={linkedin} />
          <AiFillGithub cursor="pointer" onClick={github} />
          <SiNetlify cursor="pointer" onClick={portfolio} />
        </div>
      </div>
    </div>
  );
};
