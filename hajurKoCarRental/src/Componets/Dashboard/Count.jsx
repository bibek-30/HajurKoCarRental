import React from "react";

const Count = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-primary text-white order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <i className="fa fa-cart-plus f-left"></i>
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders :{" "}
                <span className="f-right text-light">351</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
