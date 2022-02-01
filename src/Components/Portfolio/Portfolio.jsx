import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";

export default function Portfolio() {

const list= [
  {
    id: "featured",
    title: "Featured",
  },
  {
    id: "web",
    title: "Web App",
  },
  {
    id: "mobile",
    title: "Mobile App",
  },
  {
    id: "design",
    title: "Design",
  }
]

  return <div className="portfolio" id="portfolio">
<h1>Portfolio</h1>
<ul>
{list.map(item => (
<PortfolioList title= {item.title}/>
))}
</ul>
<div className="container">
  <div className="item">
    <img src="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2022/01/61d2f2d5c1965662862097.jpg" alt="" />
    <h3>Metanet</h3>
  </div>
  <div className="item">
    <img src="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2022/01/61d2f2d5c1965662862097.jpg" alt="" />
    <h3>Metanet</h3>
  </div>
  <div className="item">
    <img src="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2022/01/61d2f2d5c1965662862097.jpg" alt="" />
    <h3>Metanet</h3>
  </div>
  <div className="item">
    <img src="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2022/01/61d2f2d5c1965662862097.jpg" alt="" />
    <h3>Metanet</h3>
  </div>
  <div className="item">
    <img src="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2022/01/61d2f2d5c1965662862097.jpg" alt="" />
    <h3>Metanet</h3>
  </div>
  <div className="item">
    <img src="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2022/01/61d2f2d5c1965662862097.jpg" alt="" />
    <h3>Metanet</h3>
  </div>
</div>
  </div>;
}
