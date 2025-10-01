import { Link } from "react-router-dom";

export default function Plans(){
  return (
    <div className="center-screen">
      <div className="plans">
        <div className="plan">
          <h2>Free</h2>
          <ul>
            <li>Read posts</li>
            <li>Basic UI</li>
          </ul>
          <Link className="btn btn-black" to="/">Choose Free</Link>
        </div>

        <div className="plan">
          <h2>Premium</h2>
          <ul>
            <li>Customisation</li>
            <li>Analytics</li>
            <li>Priority support</li>
          </ul>
          <Link className="btn btn-red" to="/pay">Choose Premium</Link>
        </div>
      </div>
    </div>
  );
}
