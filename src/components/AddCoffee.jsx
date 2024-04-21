import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(newCoffee);
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] p-12 md:p-24">
        <h2 className="text-3xl font-bold text-center mb-5">Add a Coffee </h2>
        <form onSubmit={handleAddCoffee} className="space-y-4">
          {/* form row */}
          <div className="md:flex   gap-12">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                name="name"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                name="quantity"
                required
              />
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex  gap-12">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
                name="supplier"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Taste Coffee"
                className="input input-bordered w-full"
                name="taste"
                required
              />
            </div>
          </div>
          {/* form category row */}
          <div className="md:flex  gap-12">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category Name"
                className="input input-bordered w-full"
                name="category"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="Details Coffee"
                className="input input-bordered w-full"
                name="details"
                required
              />
            </div>
          </div>
          {/* form Photo URL row */}
          <div className=" gap-12">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Category Name"
                className="input input-bordered w-full"
                name="photoURL"
                required
              />
            </div>
          </div>

          <div className="form-control pt-5">
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-neutral"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
<h2>Add Coffee Page</h2>;
