import React from "react";

const Comments = () => {

    return (
        <>
            <div class="row g-2">
                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="name" />
                        <label for="floatingInputGrid">User Name</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="01-800-0000" />
                        <label for="floatingInputGrid">Phone Number</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="name@example.com" />
                        <label for="floatingInputGrid">User e-mail</label>
                    </div>
                </div>

            </div>

            <div class="row g-2 mt-1">

                <div className="form-floating mt-2 ">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Leave a Comment</label>
                </div>

                <div className="form-floating mt-2 col-md-3">
                    <button type="button" class="btn btn-primary btn-lg mt">Large button</button>
                </div>

            </div>

        </>
    );
};

export default Comments