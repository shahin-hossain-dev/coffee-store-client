import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item btn-neutral">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item btn-warning"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
