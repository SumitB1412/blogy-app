import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:8000/blogs/user/62f5456ffffdd08604527c7e")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Carousel variant="dark">
      <Carousel.Item
        style={{
          display: "flex",
          border: "1px solid",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h3>Some text</h3>
        </div>
        <div>
          <img
            height="300px"
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxBo00SBWf1a7EmTHrxbaOwm6wEMIHuMi8g&usqp=CAU"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="300px"
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeU1ZmusWbP2NiJH8Al-zUCjwxzK8b-OH6Q&usqp=CAU"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="300px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLB4LgJLIG6BuyMNB19sQE1PTr0gGJXN3ig&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
