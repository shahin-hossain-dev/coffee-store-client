import React from "react";

const Coffee = ({ coffee }) => {
  console.log(coffee);
  const { id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} alt="Movie" />
        </figure>
        <div className=" flex items-center justify-between w-full pe-6">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Taste: {taste}</p>
            <p>Supplier: {supplier}</p>
          </div>
          <div className="join join-vertical space-y-2">
            <button className="btn join-item btn-neutral">View</button>
            <button className="btn join-item btn-neutral">Edit</button>
            <button className="btn join-item btn-neutral">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
