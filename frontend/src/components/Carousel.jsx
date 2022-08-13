import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/carousel.module.css";

function Carousels() {
  return (
    <Carousel variant="dark" fade interval={5000}>
      <Carousel.Item>
        <div className={styles.parent}>
          <img
            className="d-block"
            src="https://assets.website-files.com/601b0eabbce5fc78dc318621/601e98759239ef2558d88222_Main%20Post%20Image%208.png"
            alt="First slide"
          />
          <div className={styles.child}>
            <h3>
              <div className={styles.line}></div>Travel
            </h3>
            <h2>
              How to find a place to work remotely from as a digital nomad
            </h2>
            <p>
              October 22, 2020 <strong>•</strong> 7 min read
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.parent}>
          <img
            className="d-block"
            src="https://assets.website-files.com/601b0eabbce5fc78dc318621/60302d12c924de6cd28f2b41_Main%20Post%20Image%2011.png"
            alt="First slide"
          />
          <div className={styles.child}>
            <h3>
              <div className={styles.line}></div>Tech
            </h3>
            <h2>“What it is” and “What it does” thinking.</h2>
            <p>
              July 16, 2022 <strong>•</strong> 4 min read
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.parent}>
          <img
            className="d-block"
            src="https://assets.website-files.com/601b0eabbce5fc78dc318621/6030302271aa6a1af8d25e53_Main-Post-Image-12.jpg"
            alt="First slide"
          />
          <div className={styles.child}>
            <h3>
              <div className={styles.line}></div>Travel
            </h3>
            <h2>What They Don’t Say About Ontario, Canada.</h2>
            <p>
              August 6, 2022 <strong>•</strong> 8 min read
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
