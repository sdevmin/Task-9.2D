import { Link } from "react-router-dom";

export default function App(){
  return (
    <div className="center-screen">
      <div className="card">
        <div className="brand">
          <span className="brand-badge">DEV@Deakin</span>
          <h1 className="brand-title">Premium & Posts</h1>
        </div>
        <p style={{marginTop:8, marginBottom:18, textAlign:"center"}}>
          
        </p>
        <div className="row">
          <Link className="btn btn-red" to="/plans">View Plans</Link>
          <Link className="btn btn-black" to="/post">Create Post</Link>
        </div>
      </div>
    </div>
  );
}
