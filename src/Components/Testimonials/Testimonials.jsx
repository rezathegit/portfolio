import "./Testimonials.scss";

export default function Testimonials() {
  return <div className="testimonials" id="testimonials">
<h1>Testimonials</h1>
<div className="container">
  <div className="card">
    <div className="top">
      <img className="left"
      src="assets/right-arrow.png" alt="" />
      <img 
      className="user"
      src="https://media-exp1.licdn.com/dms/image/C4E03AQFP0Y86H16mWw/profile-displayphoto-shrink_400_400/0/1640534093386?e=1649289600&v=beta&t=MHD1Uo5wf4Vwo-_Q4lJEdkA6cuAeIeNkxKnH5OBuVsI" alt="" />
      <img className="right" src="assets/youtube.png" alt="" />
    </div>
    <div className="center">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Sit natus necessitatibus.
    </div>
    <div className="bottom">
      <h3>Milos</h3>
      <h4>Fullstack we developer at Footway</h4>
    </div>
  </div>
</div>
  </div>;
}
