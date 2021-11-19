import React from "react";
import { Link } from 'react-router-dom';

function PostCard() {

  return (
    <div className="card bg-dark mt-3 ms-3 me-3 rounded-3">
      <div className="card-body text-white">
        <h5 className="card-title ">Post Title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Anonymous User</h6>
        <p className="card-text">Some quick example text to build</p>
      </div>

      <Link to="/PsicologiaCarlos/PostContent" className="ButtonGoToPost">
        <button type="button" class="btn btn-primary btn-lg ms-3 mb-3">Go to Post</button>
      </Link>

    </div>
  );
}

export default PostCard;
