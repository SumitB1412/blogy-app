import Carousel from "react-bootstrap/Carousel";

const Data = [
  {
    title: "What does it mean to race clean in today’s business world?",
    body: [
      "Is it still possible to scale an independent, bootstrapped, non-VC-backed company in the current economic climate? My idealistic self wants to prove that it’s not only possible, but preferable — mostly because I also want to believe that money isn’t everything (not just in the business world).",
      "Now with an economic crisis looming, and many businesses already suffering the effects, I find myself wondering if this idealistic mindset is making it harder for me, for my organization, than it already is. Trying to do the same (or more) with less funds and resources than our peer organizations when we could line our pockets with VC money, scale unsustainably, and be more likely to win the race.",
      "Put that way, it only begs the question of whether there is a race to be won at all. Of course, there is in many ways — the race to unicorn, then decadorn, then centacorn. But is this what it’s really all about?",
    ],
    img: "https://miro.medium.com/fit/c/56/56/1*4Dfyp6gSbz5o4f0kqo0ztw.png",
    date: "Aug 11 2022",
    tags: "Tech",
  },
  {
    title: "“What it is” and“What it does” thinking.",
    body: [
      "I believe there are two fundamental styles of framing how the tech industry looks at technology: what it is and what it does style thought.",
      "In my experience understanding which style you are, and which style you are communicating with can be a super power in technical discussions and negotiations. I think the industry is at risk of losing our what it is style thinkers as we move closer to late stage vendor economies — especially in cloud computing.",
      "In 2016 I became a Kubernetes maintainer and began focusing my career towards becoming a distributed systems and infrastructure expert.",
    ],
    img: "https://miro.medium.com/fit/c/56/56/1*Ze9qqZNui7r117a2ppm7Nw.png",
    date: "Aug 11 2022",
    tags: "Tech",
  },
  {
    title: "Spring Boot: The GOOD and the BAD",
    body: [
      "Alright so you’ve made your choice. Java. Good choice!",
      "Now you got to choose a framework because we all know a programming language without a framework to be paired with it is like a meal with no salt.",
      "You’ve done a ton of research, read lots of articles, asked several people and, of course, checked the popularity over the years of all Java frameworks.",
      "When it comes to selecting a Java framework, there are no shortage of options to choose from. However, in recent years, one framework has emerged as the clear favorite among developers: Spring Boot.",
      "Spring Boot includes a number of built-in features that make development faster and easier, such as creating stand-alone executable jars and providing configuration options for flexible deployment. Spring Boot also makes it easy to create production-ready applications, with minimal configuration and setup required.",
    ],
    img: "https://miro.medium.com/max/1400/1*JJpFS1yDBdtLzs_yadfUoQ.png",
    date: "Aug 9 2022",
    tags: "Tech",
  },
];

function Carousels() {
  
  return (
    <Carousel variant="dark" className="h-50">
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxBo00SBWf1a7EmTHrxbaOwm6wEMIHuMi8g&usqp=CAU"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeU1ZmusWbP2NiJH8Al-zUCjwxzK8b-OH6Q&usqp=CAU"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLB4LgJLIG6BuyMNB19sQE1PTr0gGJXN3ig&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
