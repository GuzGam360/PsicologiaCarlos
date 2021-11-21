import React from "react";

const LeftCard = () => {
    return (
        <>

            <div className="Container">
                <div className="row">

                    <div className="card mx-2 my-3 col-md">
                        {/* style="width: 18rem;" */}
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Doctor Octavio Cuellar</h5>
                            <p className="card-text">Telefono: 81 1017 9225</p>
                            <p className="card-text">email: Doc.OcC@example.com</p>
                            {/* <a href="#" class ="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div className="card mx-2 my-3 col-md">
                        {/* style="width: 18rem;" */}
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Doctor Kurt Connors</h5>
                            <p className="card-text">Telefono: 81 1017 9225</p>
                            <p className="card-text">email: Doc.Kurt.Lizzard@example.com</p>
                            {/* <a href="#" class ="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div className="card mx-2 my-3 col-md">
                        {/* style="width: 18rem;" */}
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Doctor Esteban Vincent</h5>
                            <p className="card-text">Telefono: 81 1017 9225</p>
                            <p className="card-text">email: Doc.Esteban.Strange@example.com</p>
                            {/* <a href="#" class ="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LeftCard;