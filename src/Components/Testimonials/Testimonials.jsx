import "./Testimonials.scss";

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Milos Tanaskovic",
      title: "Senior Developer",
      img:
        "https://avatars.githubusercontent.com/u/45362409?v=4",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Jonatan Petterson",
      title: "Co-Founder of Metanet",
      img:
        "https://avatars.githubusercontent.com/u/77250488?v=4",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Andrew Chalkley",
      title: "Treehouse Guest Teacher",
      img:
        "https://uploads.teamtreehouse.com/production/profile-photos/26170/avatar_TeacherShoot-Andrew.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return <div className="testimonials" id="testimonials">
<h1>Testimonials</h1>
<div className="container">
  {data.map(d=>(

    <div className={d.featured ? "card featured" : "card"}>
    <div className="top">
      <img className="left"
      src={d.icon} alt="" />
      <img 
      className="user"
      src={d.img} 
      alt="" />
      <img className="right" src="assets/youtube.png" alt="" />
    </div>
    <div className="center">
      {d.desc}
    </div>
    <div className="bottom">
      <h3>{d.name}</h3>
      <h4>{d.title}</h4>
    </div>
  </div>
      ))}
</div>
  </div>;
}
