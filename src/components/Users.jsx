import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  // console.log(loadedUsers);

  useEffect(() => {
    axios
      .get("https://coffee-store-server-sand-phi.vercel.app/user")
      .then((data) => {
        console.log(data.data); // axios data এর মধ্যে data পাওয়া যায়।
      });
  }, []);

  const handleDeleteUser = (id) => {
    // using fetch
    fetch(`https://coffee-store-server-sand-phi.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("User Deleted");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div className="w-1/2 mx-auto mt-5">
      <h2>Users page</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedInUser}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
