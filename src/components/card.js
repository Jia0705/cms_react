import { Link } from "react-router-dom";
function Card(props) {
  const {
    title,
    desc,
  } = props;
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <div className="text-end">
            <Link to="/SinglePost" className="btn btn-primary btn-sm">Read More</Link>
          </div>
      </div>
    </div>
  );
}

export default Card;
