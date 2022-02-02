import "./Works.scss";

export default function Works() {

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return <div className="works" id="works">
    <div className="slider">
      <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src="assests/mobile.png" alt="" />
              </div>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Similique et repellat magni velit a repudiandae deleniti voluptate!
              </p>
              <span>Projects</span>
            </div>
          </div>
          <div className="right">
            <img src="https://cdn.dribbble.com/users/949438/screenshots/17410216/media/43c2aed8bdf986c1c3dabbdacb4bd76b.png?compress=1&resize=1600x1200&vertical=top" alt="" />
          </div>
        </div>
      </div>
    </div>
    <img src="assests/arrow.png" className="arrow left" alt="" />
    <img src="assests/arrow.png" className="arrow right" alt="" />
  </div>;
}
