import Carousel from "react-bootstrap/Carousel";

function Carousels() {
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
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="300px"
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeU1ZmusWbP2NiJH8Al-zUCjwxzK8b-OH6Q&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="300px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLB4LgJLIG6BuyMNB19sQE1PTr0gGJXN3ig&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
