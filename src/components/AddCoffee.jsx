import React from "react";

const AddCoffee = () => {
  return (
    <div>
      <h2 className="text-xl">Add a Coffee </h2>
      <form>
        <div className="flex gap-12">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
<h2>Add Coffee Page</h2>;
