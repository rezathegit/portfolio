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
        "https://lh3.googleusercontent.com/1NtmMMsa6o3HBgaB7nPN5APP4voyUP3iZUM2Z6_fnXTb-eYaa-VLmLC4JWsMVNWMW9_CgfhszSOBotP2bJp654XMCpiCYwBDVimTkB_hRhY0YVNEiYtT2WssvOVwIn9sIAevoTqViHgFoa7_-aRhOV8lxOgPkAFxSrhrtPsPN511bMGL8s4-MC3xMHgClgIXPkPt71g_lklLLGysqAH9KOY8eXlGUkgB9yAcvuYKL19WoCmpPgo07ba4Zs442fmk7IY2UD9qRylyInY_Z3eQHY1b0Gpu4lm4XMX7AeVO4yphu-NkzUGsRYya96XL6m49jdCGEJvtNpgSkMhznhCv_1Bnq09ojjQZqRuG-Faee5oUnvdEkiNJjEhGLeJunNvrjt9j_p1tj7stTcjJID0w-kepKaJcamaZsgM0luWQQ7a-RsV7XM-yPFMFEr3T_bzDff-4eKZtbrcpSDKPHWzOQiOISIniPVJt7Uv0Z-f7P39grM0ehiAshcpGmna6AgINQO1S0yo4yKMV-13c8uw5_g_2Pz_KJKWAmVGwiYCrE_JrohqnJQDq_1-SjHCa5W7frQ0CKprNXbau2kFf-63-VDbr7INnpjauqlaNNsc8sCfc5Q1uhv_rsb7mu8Lnl5FibYfe4kDIDviOwOHIKcsRSzN6OVG0rFZdfBLmeEHYG2Sk59UzhGAZm1zKOL086Qo-ve5mTPrdgQh9Zg4caVNHfQ=w1600-h1200-no?authuser=0",
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
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
    <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
  </div>;
}
