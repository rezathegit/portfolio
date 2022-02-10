import { useState } from "react";
import "./Works.scss";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "I started my coding journey as a hubby coder and became more interested in this world. I recently finished a three-months Fullstack JavaScript bootcamp @ School of Applied Technology </salt>. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "As a hobby coder I was always fasinated by mobile apps and the way they impacted our life style. I would like to improve my knowlege through creating creative mobile apps.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Architecture",
      desc:
        "I worked as an architect for 10+ years in Sweden. Here you can see some of my works.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return <div className="works" id="works">
    <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
      {data.map((d) => (

        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://cdn.dribbble.com/users/949438/screenshots/17410216/media/43c2aed8bdf986c1c3dabbdacb4bd76b.png?compress=1&resize=1600x1200&vertical=top" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
    <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
  </div>;
}
