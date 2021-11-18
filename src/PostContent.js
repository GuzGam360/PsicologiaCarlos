import React from "react";
import Comments from "./components/Comments";

function PostContent() {
    return (
        <>
            <div className="card bg-dark mt-3 ms-1 me-1 rounded-3 py-3">
                <div className="card-body text-white">
                    <h1 className="card-title ">Help</h1>
                    <h6 className="card-subtitle mb-2 text-muted">Anonymous User</h6>
                    <p className="card-text pt-3">Some quick example text to build</p>
                </div>
            </div>

            <h1 className="mt-3 ms-1 text-white">Messages</h1>

            <Comments/>

        </>
    );
}

export default PostContent